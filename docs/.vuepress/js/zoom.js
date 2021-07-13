function viewZoom () { }

viewZoom.prototype.MIN_SCALE = 0.1;
viewZoom.prototype.MAX_SCALE = 10;
viewZoom.prototype.touchDistance = 0;
viewZoom.prototype.dScale = 0.1;
viewZoom.prototype.elScale = 1;
viewZoom.prototype.enable = true;
viewZoom.prototype.el = undefined;

viewZoom.prototype.touchstart = function (e) {
    this.elScale = this.getElScaleNum(this.el);
    if (e.touches.length > 1 && e.touches[0].target === e.touches[1].target) {
        this.touchDistance = this.getTouchesDistance(e.touches);
    }
}

viewZoom.prototype.getElScaleNum = function(el) {
    let scale = 1;
    if (el.style.transform) {
        let elScale = el.style.transform.match(/\s+scale\([-]?[0-9]+(\.[0-9]+)?\)/i)
        if (elScale && elScale[0]) {
            scale = elScale[0].replace("scale(", "").replace(")", "")
        }
    }
    return scale;
}

viewZoom.prototype.touchmove = function(e) {
    if (e.touches.length > 1 && e.touches[0].target === e.touches[1].target) {
        let dScale = this.getDisProportion(this.getTouchesDistance(e.touches));
    
        if (dScale < 0.95 || dScale > 1.05) {
            this.zoomOutIn(dScale);
        }
    }
}

viewZoom.prototype.touchend = function(e) {
    this.touchDistance = 0;
}

viewZoom.prototype.getDisProportion = function(dm) {
    return dm / this.touchDistance;
}

viewZoom.prototype.getTouchesDistance = function(touches) {
    let xLen = Math.abs(touches[0].pageX - touches[1].pageX);
    let yLen = Math.abs(touches[0].pageY - touches[1].pageY);

    return Math.sqrt(xLen * xLen + yLen * yLen);
}

viewZoom.prototype.zoomOutIn = function(ticks) {
    if (this.enable) {
        var newScale = this.elScale;
        newScale = (newScale * ticks).toFixed(2);
        newScale = Math.ceil(newScale * 10) / 10;
        newScale = Math.min(this.MAX_SCALE, newScale);
        newScale = Math.max(this.MIN_SCALE, newScale);
        
        this.setElScale(newScale);
    }
}

viewZoom.prototype.setElScale = function(scale) {
    let transform = this.el.style.transform || "";
    transform = transform.replace(/\s+scale\([-]?[0-9]+(\.[0-9]+)?\)/i, "");
    transform+= ' scale('+ scale + ')';
    this.el.style.transform = transform;
}

viewZoom.prototype.addEvent = function(el) {
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

export default viewZoom;