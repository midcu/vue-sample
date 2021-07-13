var TreeItem = {
    name: "tree-item",
    props: {
        isParent: {
            type: Boolean,
            default: false
        },
        isChecked: {
            type: Boolean,
            default: false
        },
        isOpened: {
            type: Boolean,
            default: false
        },
        depth: {
            type: Number,
            default: 0
        },
        data: {
            type: Object,
            default: { }
        },
        text: {
            type: [String, Number, Boolean],
            default: ''
        }
    },
    data: function() {
        return {

        }
    },
    render: function(h) {
        let className = "va-tree-item ";
        if (this.isChecked) {
            className += 'va-tree-item-checked'
        }
        let style = 'padding-left:'+ (this.depth * 10) +'px;'
        let subItem = [];
        if (this.isParent) {
            let subClass = 'va-tree-item-icon ';
            if (this.isOpened) {
                subClass+='icon-folder-2'
            } else {
                subClass+='icon-folder'
            }
            subItem.push(h('i', {
                class: subClass,
                on: {
                    click: (event) => {
                        this.$emit('openSubMenu');
                        event.stopPropagation();
                    }
                }
            }))
        } else {
            subItem.push(h('i', { class: "va-tree-item-icon" }))
        }
        subItem.push(h('span', this.text));


        return h('span', {
            class: className,
            style: style,
            on: {
                click: () => this.$emit('checkItem')
            }
        }, subItem)
    }
}

export default TreeItem;