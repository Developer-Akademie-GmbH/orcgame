let x = 0;

function moveCharacter(){
    orc.style = `object-position: -${x * 300}px;`;
    x++;

    if(x == 7) {
        x = 0;
    }
}