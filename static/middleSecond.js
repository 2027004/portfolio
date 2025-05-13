dragElement(write);
dragElement(colors);
dragElement(margin);
dragElement(templates);
dragElement(boxInfo);

function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id+"headbar")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id+"headbar").onmousedown = dragMouseDown;
} else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
    e = e || window.event;

    // Don't start dragging if the target is a <select> or inside one
    if (e.target.tagName === "SELECT" || e.target.closest("select")) {
        return;
    }

    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
}
}


/* MOVES TO FRONT */
write.addEventListener('mousedown', (ev) => {
    write.style.zIndex = 3;
    colors.style.zIndex = 2;
    margin.style.zIndex = 2;
    templates.style.zIndex = 2;
    boxInfo.style.zIndex = 2;
})
colors.addEventListener('mousedown', (ev) => {
    colors.style.zIndex = 3;
    write.style.zIndex = 2;
    margin.style.zIndex = 2;
    templates.style.zIndex = 2;
    boxInfo.style.zIndex = 2;
})
margin.addEventListener('mousedown', (ev) => {
    colors.style.zIndex = 2;
    write.style.zIndex = 2;
    margin.style.zIndex = 3;
    templates.style.zIndex = 2;
    boxInfo.style.zIndex = 2;
})
templates.addEventListener('mousedown', (ev) => {
    colors.style.zIndex = 2;
    write.style.zIndex = 2;
    margin.style.zIndex = 2;
    templates.style.zIndex = 3;
    boxInfo.style.zIndex = 2;
})
boxInfo.addEventListener('mousedown', (ev) => {
    colors.style.zIndex = 2;
    write.style.zIndex = 2;
    margin.style.zIndex = 2;
    templates.style.zIndex = 2;
    boxInfo.style.zIndex = 3;
})

