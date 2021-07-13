import { addClass, removeClass } from "./dom"
class TransitionA {
    beforeEnter = function(el) {
        addClass(el, "collapse")
        if (!el.dataset) el.dataset = {};
        el.style.height = '0';
    }

    enter = function(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            el.style.height = '';
        }

        el.style.overflow = 'hidden';
    }

    afterEnter = function(el) {
        removeClass(el, 'collapse');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    }

    beforeLeave = function(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    }

    leave = function(el) {
        addClass(el, "collapse")
        if (el.scrollHeight !== 0) {
            el.style.height = 0;
        }
    }

    afterLeave = function(el) {
        removeClass(el, 'collapse');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    }
}

export default {
    render(h) {
        return h('transition', { on: new TransitionA() }, [this.$slots.default])
    }
}