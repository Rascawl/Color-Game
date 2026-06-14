const faces = [
    { color: "red",    rotation: "rotateX(0deg) rotateY(0deg)" },
    { color: "green",  rotation: "rotateX(0deg) rotateY(180deg)" },
    { color: "yellow", rotation: "rotateX(0deg) rotateY(-90deg)" },
    { color: "blue",   rotation: "rotateX(0deg) rotateY(90deg)" },
    { color: "white",  rotation: "rotateX(-90deg) rotateY(0deg)" },
    { color: "pink",   rotation: "rotateX(90deg) rotateY(0deg)" }
];
 
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const rollBtn = document.getElementById("roll");
const historyEl = document.getElementById('history');
 
let isRolling = false;
 
function getRandomFace() {
    return Math.floor(Math.random() * faces.length);
}
 
function rollDice() {
    if (isRolling) return;
    isRolling = true;
    die1.style.transition = "none";
    die2.style.transition = "none";
    die1.style.transform = "rotateX(0deg) rotateY(0deg)";
    die2.style.transform = "rotateX(0deg) rotateY(0deg)";

    void die1.offsetWidth;
    void die2.offsetWidth;

    const result1 = getRandomFace();
    const result2 = getRandomFace();
 
    die1.style.transition = "transform 4s cubic-bezier(0.25, 0.1, 0.1, 1)";
    die2.style.transition = "transform 4s cubic-bezier(0.25, 0.1, 0.1, 1)";

    const spins = "rotateX(1800deg) rotateY(1440deg) ";
    die1.style.transform = spins + faces[result1].rotation;
    die2.style.transform = spins + faces[result2].rotation;

    setTimeout(function() {
        isRolling = false;
        
        console.log("Roll finished!");
        console.log("Die 1: " + faces[result1].color);
        console.log("Die 2: " + faces[result2].color);
        addRollToHistory(result1, result2);
        
    }, 4000); 
}

const displayColors = {
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    blue: 'blue',
    white: '#ffffff',
    pink: 'rgb(224,19,163)'
};

function addRollToHistory(i1, i2){
    if(!historyEl) return;
    const entry = document.createElement('div');
    entry.className = 'roll-entry';

    const sw1 = document.createElement('div');
    sw1.className = 'swatch';
    sw1.style.backgroundColor = displayColors[faces[i1].color] || faces[i1].color;

    const sw2 = document.createElement('div');
    sw2.className = 'swatch';
    sw2.style.backgroundColor = displayColors[faces[i2].color] || faces[i2].color;

    // Both faces that appear are considered "winners" for this roll
    sw1.classList.add('winner');
    sw2.classList.add('winner');

    

    entry.appendChild(sw1);
    entry.appendChild(sw2);

    historyEl.insertBefore(entry, historyEl.firstChild);

    while(historyEl.children.length > 4){
        historyEl.removeChild(historyEl.lastChild);
    }
}
rollBtn.addEventListener("click", rollDice);
