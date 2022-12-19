let diceCountText;
let diceRollText;
let diceArr = [];
let diceArrSum = [];
document.getElementById("roll").onclick = function() {
    let diceCount = document.getElementById("diceCount");
    diceCountText = diceCount.options[diceCount.selectedIndex].text;
    diceRollText = document.getElementById("diceRoll").value
    setNums();
}
function setNums() {
    let randNum;
    let count = 0;
    if (diceCountText == 1) {
        for (var k = 0; k < diceRollText; k++) {
            randNum = Math.round(((Math.random() * 5) + 1));
            diceArr[k] = randNum;
        }
    } else if (diceCountText == 2) {
        for (var i = 0; i < 2 * diceRollText; i++) {
            randNum = Math.round(((Math.random() * 5) + 1));
            diceArr[i] = randNum;
            if (count == 0) {
                diceArrSum[(i * 2)] = randNum;
                count++;
            }
            else if (count == 1) {
                let keep = diceArr[i - 1];
                console.log("keep[ is " + keep);
                diceArrSum[(i * 2)] = randNum + keep;
                count--;
            }
        }
        console.log(diceArr);
        console.log(diceArrSum);
    } else { //diceCountText == 3
        for (var i = 0; i < 3 * diceRollText; i++) {
            randNum = Math.round(((Math.random() * 5) + 1));
            diceArr[i] = randNum;
        }
    }
    setTable();
}
function setTable() {
    //frequency
    document.getElementById("oneFrequency").innerHTML;
}