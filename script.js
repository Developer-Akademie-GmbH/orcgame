let x = 0;
let left = 100;
// setInterval(moveCharacter, 75);



document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
        // left arrow
        left -= 5;
        moveCharacter();
        orc.style.left = `${left}px`;
    }
    else if (e.keyCode == '39') {
        // right arrow
        left += 5;
        moveCharacter();
        orc.style.left = `${left}px`;
    }
}

function moveCharacter() {
    orc.style = `object-position: -${x * 200}px;`;
    x++;

    if (x == 7) {
        x = 0;
    }
}