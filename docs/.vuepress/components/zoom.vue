<template>
    <div class="va-zoom-parent">
        <div id="zoom" class="va-zoom-child"></div>
    </div>
</template>

<script>
import viewZoom from '../js/zoom'
export default {
    mounted() {
        var vZoom = { };
        vZoom.__proto__ = viewZoom.prototype;

        vZoom.addEvent(document.getElementById("zoom"))
    }
}
</script>

<style scoped>
.va-zoom-parent{
    margin-top: 20px;
    height: 250px;
    padding: 10px;
    background: #3e3e3e;
    text-align: center;
    overflow: hidden;
}
.va-zoom-child{
    height: 150px;
    width: 150px;
    display: inline-block;
    background: #3eaf7c;
    transition:all 1s ease-out;
}
</style>