<template>
    <div class="va-tag">
        <slot></slot>
        <i
            v-if="closable"
            class="va-tag_close icon-close"
            @click.stop="closeTag"
        />
    </div>
</template>

<script>
export default {
    props: ['closable'],
    methods: {
        closeTag: function($event) {
            this.$emit('close', $event);
        }
    }
}
</script>

<style>
.va-tag {
    display: inline-block;
    min-width: 50px;
    white-space: nowrap;
    height: 27px;
    color: #fff;
    background: #3eaf7c;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #3eaf7c;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    box-sizing: border-box;
    padding: 0 10px;
}
.va-tag:hover {
    background: #ffffff;
    color: #7ec699;
}
.va-tag_close {
    position: relative;
    top: -1px;
    right: -5px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    font-size: 15px;
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: middle;
}
.va-tag_close:hover {
    color: #f56c6c;
}
</style>