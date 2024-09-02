let x = 0;

setInterval(moveCharacter, 75);

function moveCharacter(){
    orc.style = `object-position: -${x * 200}px;`;
    x++;

    if(x == 7) {
        x = 0;
    }
}