let x = 0;

function moveCharacter(){
    x++;
    orc.style = `object-position: -${x * 300}px;`;
}