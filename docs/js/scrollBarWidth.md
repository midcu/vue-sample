---
title: 滚动条的宽度
---
# 获取浏览器滚动条的宽度
> 获取浏览器滚动条的宽度

### 实现代码
``` js
var scrollBarWidth = undefined;

function getScrollBarWidth () {

    if (scrollBarWidth !== undefined) {
        return scrollBarWidth;
    }

    var outer = document.createElement('div');

    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.overflow = 'scroll';

    document.body.appendChild(outer);

    scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    
    outer.parentNode.removeChild(outer);

    return scrollBarWidth;
}
```
