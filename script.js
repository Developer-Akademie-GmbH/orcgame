let x = 0;
let left = 100;
let bottom = 250;
let leftArrow = false;
let rightArrow = false;
let topArrow = false;
let bottomArrow = false;

document.onkeydown = checkKey;
document.onkeyup = unCheckKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        topArrow = true;
    }
    else if (e.keyCode == '40') {
        bottomArrow = true;
    }
    else if (e.keyCode == '37') {
        leftArrow = true;

    }
    else if (e.keyCode == '39') {
        rightArrow = true;
    }


}

function unCheckKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        topArrow = false;
    }
    else if (e.keyCode == '40') {
        bottomArrow = false;
    }
    else if (e.keyCode == '37') {
        leftArrow = false;

    }
    else if (e.keyCode == '39') {
        rightArrow = false;
    }
}

setInterval(updateGame, 25);

function updateGame() {
    if (topArrow) {
        bottom += 5;
    }

    if (bottomArrow) {
        bottom -= 5;
    }

    if (leftArrow) {
        left -= 5;
    }

    if (rightArrow) {
        left += 5;
    }

    if (topArrow || bottomArrow || leftArrow || rightArrow) {
        moveCharacter();
    }
    orc.style.left = `${left}px`;
    orc.style.bottom = `${bottom}px`;
}


function moveCharacter() {
    orc.style.objectPosition = `-${x * 200}px`;
    x++;

    if (x == 7) {
        x = 0;
    }
}