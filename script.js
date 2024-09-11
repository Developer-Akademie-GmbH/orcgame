let x = 0; // Frame
let berserkX = 0; // Frame für den Berserk
let left = 100;
let bottom = 250;
let leftArrow = false;
let rightArrow = false;
let topArrow = false;
let bottomArrow = false;
let attack = false; // Neuer Zustand für den Angriff
let attacking = false; // Gibt an, ob der Angriff gerade stattfindet
let berserkLeft = window.innerWidth; // Startet außerhalb des sichtbaren Bereichs
let berserkBottom = getRandomY(); // Zufällige Höhe für den Berserk

document.onkeydown = checkKey;
document.onkeyup = unCheckKey;

setInterval(spawnBerserk, 5000);

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
    } else if (e.keyCode == '68') { // 'd' Taste
        if (!attacking) {
            attack = true;
            attacking = true;
            x = 0; // Setze die Frame für Attack auf 0
            orc.src = "img/Orc_Shaman/Attack_1.png"; // Wechsle zum Angriffsbild
            setTimeout(() => {
                orc.src = "img/Orc_Shaman/Walk.png"; // Zurück zur Laufanimation
                attacking = false; // Angriff beendet
            }, 400); // Setze die Zeit passend zu der Anzahl der Frames (4 Frames)
        }
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

setInterval(updateGame, 15);
setInterval(moveBerserk, 10);
function updateGame() {
    if (attacking) {
        moveAttack(); // Animation des Angriffs
    } else {
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
    }
    orc.style.left = `${left}px`;
    orc.style.bottom = `${bottom}px`;


}

function moveAttack() {
    orc.style.objectPosition = `-${x * 200}px`;
    x++;

    if (x == 4) {
        x = 0;
    }
}

function moveCharacter() {
    orc.style.objectPosition = `-${x * 200}px`;
    x++;

    if (x == 7) {
        x = 0;
    }
}


// Berserk auf zufälliger Höhe spawnen und sich bewegen lassen
function spawnBerserk() {
    berserkLeft = window.innerWidth; // Spawn außerhalb des sichtbaren Bereichs
    berserkBottom = getRandomY(); // Zufällige Y-Koordinate
    berserk.style.left = `${berserkLeft}px`;
    berserk.style.bottom = `${berserkBottom}px`;
    berserkX = 0; // Startet bei Frame 0
}

function moveBerserk() {
    berserkLeft -= 10; // Schnelle Bewegung nach links
    // if (berserkLeft < -100) { // Wenn der Berserk aus dem Sichtbereich verschwindet
    //     spawnBerserk(); // Respawn
    // }
    berserk.style.left = `${berserkLeft}px`;
    berserk.style.objectPosition = `-${berserkX * 100}px`; // Animation
    berserkX++;

    if (berserkX == 6) { // 6 Frames für die Berserk-Animation
        berserkX = 0;
    }
}

// Funktion zur Berechnung einer zufälligen Y-Koordinate für den Berserk
function getRandomY() {
    return Math.floor(Math.random() * (window.innerHeight - 600)) + 300; // Höhe zwischen 100px und der Fensterhöhe
}