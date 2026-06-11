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
        
    }, 4000); 
}
 
rollBtn.addEventListener("click", rollDice);
