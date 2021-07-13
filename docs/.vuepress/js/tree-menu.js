import TreeItem from "./tree-item";
import Transition from "./transition"
var VaTree = {
    name: "va-tree",
    components: {
        'tree-item': TreeItem,
        'va-transition': Transition
    },
    props: {
        index: {
            type: [String, Number],
            default: ""
        },
        data: {
            type: Array,
            default: []
        },
        itemname: {
            type: String,
            default: "tree-item"
        },
        props: {
            type: Object,
            default: {
                key: "id",
                label: "label",
                children: "children"
            }
        }
    },
    data: function() {
        return {
            currentNodes: [], // 需要展开的node节点
            checkedNodes: [],
            openedNodes: [],// 展开的节点
            checkedNode: "",
            classNames: {
                main: "va-tree",
                subMenu: "va-tree-sub"
            }
        }
    },
    watch: {
        index: function() {
            let a = { };
            a[this.props.key] = this.index;
            this.checkItem(a);
            this.locatedNode(a);
        }
    },
    mounted: function() {
        if (this.index) {
            let a = { };
            a[this.props.key] = this.index;
            this.checkItem(a);
            this.locatedNode(a);
        }
    },
    render: function(h) {
        let vm = this;

        function createNode(node, depth) {
            let subTree = [h(vm.itemname, {
                props: {
                    isChecked: vm.isChecked(node),
                    isOpened: vm.isOpened(node),
                    isParent: vm.isParent(node),
                    depth: depth,
                    data: node,
                    text: node[vm.props.label]
                },
                on: {
                    checkItem: ($event) => vm.checkItem(node, $event),
                    openSubMenu: ($event) => vm.openSubMenu(node, $event),
                }
            })]

            if (vm.isParent(node)) {
                let subNode = [];
                if (vm.isOpened(node)) {
                    let sub = [];
                    for (let i = 0; i < node[vm.props.children].length; i++) {
                        sub.push(createNode(node[vm.props.children][i], depth + 1));
                    }
                    subNode.push(h('ul', { class: vm.classNames.subMenu }, sub));
                }
                subTree.push(h('va-transition', subNode));
            }
            return h("li", subTree);
        }

        let nodes = [];
        for (let n = 0; n < this.data.length; n++) {
            nodes.push(createNode(this.data[n], 0));
        }
        return h('ul', { class: vm.classNames.main }, nodes);
    },
    methods: {
        openSubMenu: function(node, event) {
            if (this.openedNodes.indexOf(node) > -1) {
                this.openedNodes.splice(this.openedNodes.indexOf(node), 1)
            } else {
                this.openedNodes.push(node);
            }
        },
        checkItem: function(node, $event) {
            this.checkedNode = node;

            this.$emit("check", { node })
        },
        isParent: function(node) {
            return Array.isArray(node[this.props.children])
                && node[this.props.children].length > 0
        },
        isOpened: function(node) {
            // 非选中节点且存在于currentNodes中
            return this.openedNodes.indexOf(node) > -1;
        },
        isChecked: function(node) {
            return this.nodeEquals(this.checkedNode, node);
        },
        locatedNode: function(node) {
            let openedNodes = this.fixedPosition(this.data, node);
            if (openedNodes) {//  是否支持展开多个节点
                for (let i = 0; i < openedNodes.length; i++) {
                    const el = openedNodes[i];
                    if (this.openedNodes.indexOf(el) < 0) {
                        this.openedNodes.push(el)
                    }
                }
                this.checkItem(node)
            }
        },
        nodeEquals: function(a, b) {
            if (this.props.key && b[this.props.key] && a[this.props.key]) {
                return a[this.props.key] === b[this.props.key];
            } else {
                return a === b;
            }
        },
        fixedPosition: function(data, node) {
            for (let i = 0; i < data.length; i++) {
                if (this.nodeEquals(data[i], node)) {
                    return [];
                } else if (Array.isArray(data[i][this.props.children])) {
                    let a = this.fixedPosition(data[i][this.props.children], node);
                    if (Array.isArray(a)) {
                        return [data[i], ...a];
                    }
                }
            }
        }
    }
}

export default VaTree;
