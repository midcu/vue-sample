import { getScrollBarWidth, addResizeListener} from "./dom.js"
import Bar from "./bar.js";
export default {
    name: "va-scrollbar",
    components: {
        bar: Bar
    },
    data: function() {
        return {
            resize: false,
            observer: null,
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0
        }
    },
    render: function(h) {
        let barWidth = getScrollBarWidth();
        let style = "width: calc(100% + " + barWidth + "px); height: calc(100% + " + barWidth + "px); overflow: scroll;";
        let wrap = h("div", { ref: "wrap", style: style, on: { scroll: () => this.wrapScroll() } }, [h('div', { ref: 'resize', class: "aaaaaaaa" } , [this.$slots.default])]);

        return h("div", { class: "va-scrollbar" }, [
            wrap, 
            h('bar', { props: { move: this.moveX, size: this.sizeWidth }, on: { thumbPosition: (op) => this.thumbPosition(op) } }),
            h('bar', { props: { vertical: true, move: this.moveY, size: this.sizeHeight }, on: { thumbPosition: (op) => this.thumbPosition(op) } })
        ])

    },
    mounted: function() {
        this.$nextTick(() => {
            this.update();
            if (this.$refs.resize && this.resize) {
                this.observer = addResizeListener(this.$refs.resize, () => this.update());
            }
        });
    },
    methods: {
        wrapScroll: function() {
            let wrap = this.$refs.wrap;
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
        },
        update: function() {
            if (!this.$refs.wrap) return;
            const wrap = this.$refs.wrap;
            let heightPercentage, widthPercentage;
            heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
            widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);
      
            this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
            this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
        },
        thumbPosition: function({ thumbPositionPercentage, bar }) {
            this.$refs.wrap[bar.scroll] = (thumbPositionPercentage * this.$refs.wrap[bar.scrollSize] / 100);
        }
    },
    beforeDestroy: function() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}