<template>
    <va-affix :offset-bottom="offsetBottom" :offset-top="offsetTop">
        <slot></slot>
    </va-affix>
</template>

<script>
import VaAffix from "../js/affix"
export default {
    components: {
        "va-affix": VaAffix
    },
    props: ["offset-bottom", "offset-top"]
}
</script>

<style>

</style>