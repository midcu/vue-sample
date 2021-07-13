export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};

export function addClass(el, cls) {
    if (!el || !cls) return;
    var curClass = el.className;
    var classes = cls.split(/\s+/);

    for (var i = 0; i < classes.length; i++) {
        var clsName = classes[i];

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.setAttribute('class', curClass);
    }
};

export function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(/\s+/);
    var curClass = ' ' + el.className + ' ';

    for (var i = 0; i < classes.length; i++) {
        var clsName = classes[i];
        
        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.setAttribute('class', trim(curClass));
    }
};