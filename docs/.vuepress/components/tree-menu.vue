<template>
    <div style="width: 200px;border: 1px solid #ddd;border-bottom: none;margin-bottom: 3rem;">
        <va-tree :data="data"
            :props="{  key: 'text', label: 'text', children: 'nodes' }"></va-tree>
    </div>
</template>

<script>
var tree = [
    {
        text: "项目1",
        nodes: [
            {
                text: "工程1",
                nodes: [
                    {
                        text: "文件1"
                    },
                    {
                        text: "文件2"
                    }
                ]
            },
            {
                text: "工程2",
                nodes: [
                    {
                        text: "文件21"
                    },
                    {
                        text: "文件22"
                    }
                ]
            }
        ]
    },
    {
        text: "项目2"
    },
    {
        text: "项目3"
    },
    {
        text: "项目4"
    },
    {
        text: "项目5"
    }
];
import VaTree from "../js/tree-menu";
export default {
    components: {
        "va-tree": VaTree
    },
    data() {
        return {
            data: tree
        }
    }
}
</script>

<style>
/* tree */
ul.va-tree, ul.va-tree-sub{
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
}

.va-tree-item {
    display: block;
    line-height: 50px;
    height:50px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    white-space: nowrap;
}
.va-tree-sub {
    overflow: hidden;
    transition: height .5s;
}
.va-tree-item-icon {
    font-size: 12px;
    padding-left: 10px;
    display: inline-block;
    width: 30px;
}
.va-tree-item-checked {
    background-color: #9e9ffb;
}

.fade-enter-active, .fade-leave-active {
    transition: height .5s;
}
.fade-enter, .fade-leave-to {
    height: 0;
}
</style>