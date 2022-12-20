let diceCountText;
let diceRollText;
let diceArr; //sum of one roll
document.getElementById("roll").onclick = function() {
    diceCountText = "";
    diceRollText = "";
    diceArr = [];
    let diceCount = document.getElementById("diceCount");
    diceCountText = diceCount.options[diceCount.selectedIndex].text;
    diceRollText = document.getElementById("diceRoll").value
    setNums();
}
function setNums() {
    let randNum;
    let count = 0;
    if (diceCountText == 1) {
        document.getElementById("oneFrequency").innerHTML = "";
        document.getElementById("oneRolls").innerHTML =  "";
        for (var i = 0; i < diceRollText; i++) {
            randNum = Math.round((Math.random() * 5) + 1);
            document.getElementById("oneFrequency").innerHTML += randNum + ", ";
            document.getElementById("oneRolls").innerHTML += randNum + ", ";
            diceArr[i] = randNum;
        }
    } else if (diceCountText == 2) {
        document.getElementById("twoFrequency").innerHTML = "";
        document.getElementById("twoRolls").innerHTML = "";
        for (var k = 0; k < diceRollText; k++) {
            let freqSum = 0;
            for (var i = 0; i < 2; i++) {
                randNum = Math.round((Math.random() * 5) + 1);
                diceArr[count] = randNum;
                count++;
                document.getElementById("twoRolls").innerHTML += randNum + ", ";
                freqSum += randNum;
            }
            document.getElementById("twoFrequency").innerHTML += freqSum + ", ";
        }
    } else {
        document.getElementById("threeFrequency").innerHTML = "";
        document.getElementById("threeRolls").innerHTML = "";
        for (var k = 0; k < diceRollText; k++) {
            let freqSum = 0;
            for (var i = 0; i < 3; i++) {
                randNum = Math.round((Math.random() * 5) + 1);
                diceArr[count] = randNum;
                count++;
                document.getElementById("threeRolls").innerHTML += randNum + ", ";
                freqSum += randNum;
            }
            document.getElementById("threeFrequency").innerHTML += freqSum + ", ";
        }
    }
    setDoublesTriples();
    setMean();
    setMedian();
    setMode();
}
function setDoublesTriples() {
    //doubles
    let doubles = [];
    let doublesCount = 0;
    if (diceCountText == 2) {
        for (var i = 0; i < diceArr.length; i = i + 2) {
            if (diceArr[i] == diceArr[i + 1] && !doubles.includes(diceArr[i])) {
                doubles[doublesCount] = diceArr[i];
                doublesCount++;
            }
        }
        document.getElementById("twoDoubles").innerHTML = doublesCount;
    } else if (diceCountText == 3) {
        for (var i = 0; i < diceArr.length; i = i + 3) {
            if (diceArr[i] == diceArr[i + 1] || diceArr[i] == diceArr[i + 2] || diceArr[i + 1] == diceArr[i + 2]) {
                if (!doubles.includes(diceArr[i])) {
                    doubles[doublesCount] = diceArr[i];
                    doublesCount++;
                }
            }
        }
        document.getElementById("threeDoubles").innerHTML = doublesCount;
    }
    //triples
    let triples = [];
    let triplesCount = 0;
    if (diceCountText == 3) {
        for (var i = 0; i < diceArr.length; i = i + 3) {
            if (diceArr[i] == diceArr[i + 1] && diceArr[i] == diceArr[i + 2] && !triples.includes(diceArr[i])) {
                triples[triplesCount] = diceArr[i];
                triplesCount++;
            }
        }
        document.getElementById("threeTriples").innerHTML = triplesCount;
    }
}
function setMean() {
    let sum = 0;
    for (var i = 0; i < diceArr.length; i++) {
        sum += diceArr[i];
    }
    let mean  = Math.round((sum / diceArr.length) * 100) / 100;
    if (diceCountText == 1) {
        document.getElementById("oneMean").innerHTML = mean;
    } else if (diceCountText == 2) {
        document.getElementById("twoMean").innerHTML = mean;
    } else {
        document.getElementById("threeMean").innerHTML = mean;
    }
}
function setMedian() {
    let median;
    let diceArrSort = diceArr;
    diceArrSort = diceArrSort.sort(
        function (a, b) { return a - b });
    var length = diceArrSort.length;
    if (length % 2 == 1) median = diceArrSort[(length / 2) - .5]
    else median = (diceArrSort[length / 2] + diceArrSort[(length / 2) - 1]) / 2;
    if (diceCountText == 1) {
        document.getElementById("oneMedian").innerHTML = median;
    } else if (diceCountText == 2) {
        document.getElementById("twoMedian").innerHTML = median;
    } else {
        document.getElementById("threeMedian").innerHTML = median;
    }
}
function setMode() {
    let diceArrSort = diceArr;
    let mode;
    diceArrSort = diceArrSort.sort(
    function (a, b) { return a - b });

    let bestStreak = 1;
    let bestNum = diceArrSort[0];
    let currStreak = 1;
    let currNum = diceArrSort[0];
    for (var i = 1; i < diceArrSort.length; i++) {
        if (diceArrSort[i - 1] !== diceArrSort[i]) {
            if (currStreak > bestStreak) {
                bestStreak = currStreak;
                bestNum = currNum;
            }
            currStreak = 0;
            currElem = diceArrSort[i];
        }
        currStreak++;
    }
    mode = currStreak > bestStreak ? currNum : bestNum;
    if (diceCountText == 1) {
        document.getElementById("oneMode").innerHTML = mode;
    } else if (diceCountText == 2) {
        document.getElementById("twoMode").innerHTML = mode;
    } else {
        document.getElementById("threeMode").innerHTML = mode;
    }
}