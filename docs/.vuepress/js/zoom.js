class viewZoom {

    MIN_SCALE = 0.1;
    MAX_SCALE = 10;
    touchDistance = 0;
    dScale = 0.1;
    elScale = 1;
    enable = true;
    el = undefined;
    
    touchstart = function (e) {
        this.elScale = this.getElScaleNum(this.el);
        if (e.touches.length > 1 && e.touches[0].target === e.touches[1].target) {
            this.touchDistance = this.getTouchesDistance(e.touches);
        }
    }
    
    getElScaleNum = function(el) {
        let scale = 1;
        if (el.style.transform) {
            let elScale = el.style.transform.match(/\s+scale\([-]?[0-9]+(\.[0-9]+)?\)/i)
            if (elScale && elScale[0]) {
                scale = elScale[0].replace("scale(", "").replace(")", "")
            }
        }
        return scale;
    }
    
    touchmove = function(e) {
        if (e.touches.length > 1 && e.touches[0].target === e.touches[1].target) {
            let dScale = this.getDisProportion(this.getTouchesDistance(e.touches));
        
            if (dScale < 0.95 || dScale > 1.05) {
                this.zoomOutIn(dScale);
            }
        }
    }
    
    touchend = function(e) {
        this.touchDistance = 0;
    }
    
    getDisProportion = function(dm) {
        return dm / this.touchDistance;
    }
    
    getTouchesDistance = function(touches) {
        let xLen = Math.abs(touches[0].pageX - touches[1].pageX);
        let yLen = Math.abs(touches[0].pageY - touches[1].pageY);
    
        return Math.sqrt(xLen * xLen + yLen * yLen);
    }
    
    zoomOutIn = function(ticks) {
        if (this.enable) {
            var newScale = this.elScale;
            newScale = (newScale * ticks).toFixed(2);
            newScale = Math.ceil(newScale * 10) / 10;
            newScale = Math.min(this.MAX_SCALE, newScale);
            newScale = Math.max(this.MIN_SCALE, newScale);
            
            this.setElScale(newScale);
        }
    }
    
    setElScale = function(scale) {
        let transform = this.el.style.transform || "";
        transform = transform.replace(/\s+scale\([-]?[0-9]+(\.[0-9]+)?\)/i, "");
        transform+= ' scale('+ scale + ')';
        this.el.style.transform = transform;
    }
    
    addEvent = function(el) {
        let me = this;
        this.el = el;
        el.addEventListener("touchstart", function(e) {
            me.touchstart(e)
        });
        el.addEventListener("touchend", function(e) {
            me.touchend(e);
        });
        el.addEventListener("touchmove", function(e) { 
            me.touchmove(e)
        });
    }
}


export default viewZoom;