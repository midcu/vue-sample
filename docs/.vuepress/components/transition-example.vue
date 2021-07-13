<template>
    <div>
        <va-button @click="show = !show">折叠展开</va-button>
        <div class="box-parent">
            <va-transition>
                <div v-if="show">
                    <div class="box"></div>
                </div>
            </va-transition>
        </div>
    </div>
</template>

<script>
import Transition from "../js/transition"
export default {
    name: "transition-example",
    components: {
        "va-transition": Transition
    },
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
.box-parent {
    margin-top: 20px;
    height: 200px;
}
.box {
    margin-bottom: 10px;
    height: 200px;
    border-radius: 4px;
    background-color: #3eaf7c;
    margin-right: 20px;
}
</style>