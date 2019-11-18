console.log('working...');
let pins;
let myTable = document.getElementById("myTable");
let scoreArray = [];
let frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, frameEight, frameNine, frameTen;


const startgame = () => {
    document.getElementById("Zero").addEventListener("click", () => {
        pins = 0
        scoreArray.push(pins)
        console.log(scoreArray)
        frameMarkings(scoreArray);
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);
    });

    document.getElementById("One").addEventListener("click", () => {
        pins = 1
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray);
        frameMarkings(scoreArray);
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);

    });

    document.getElementById("Two").addEventListener("click", () => {
        pins = 2
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray);
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);

    });

    document.getElementById("Three").addEventListener("click", () => {
        pins = 3
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray)
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);
    });

    document.getElementById("Four").addEventListener("click", () => {
        pins = 4
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray)
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);
    });

    document.getElementById("Five").addEventListener("click", () => {
        pins = 5
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray)
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);
    });

    document.getElementById("Six").addEventListener("click", () => {
        pins = 6
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray)
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);
    });

    document.getElementById("Seven").addEventListener("click", () => {
        pins = 7
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray)
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);
    });

    document.getElementById("Eight").addEventListener("click", () => {
        pins = 8
        scoreArray.push(pins)
        console.log(scoreArray)
        rackPins(scoreArray)
        frameMarkings(scoreArray);
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);

    });

    document.getElementById("Nine").addEventListener("click", () => {
        pins = 9
        scoreArray.push(pins)
        rackPins(scoreArray)
        console.log(scoreArray)
        frameMarkings(scoreArray);
        isSpareOrStrike(scoreArray);
        newRackPins(scoreArray);
        calcScore(scoreArray);

    });

    document.getElementById("Ten").addEventListener("click", () => {
        pins = 10
        if (scoreArray.length <= 17){
        if (scoreArray.length % 2 === 0) {
            
            scoreArray.push(null, pins)
        } else {
            scoreArray.push(pins)
        }
    } else {
        scoreArray.push(pins)
    }
        console.log(scoreArray)
        frameMarkings(scoreArray)
        isSpareOrStrike(scoreArray);
        calcScore(scoreArray);
    });
    // console.log(scoreArray)
}

startgame();

const frameMarkings = (scoreArr) => {
    if (scoreArr.length <22){
    for (let i = 0; i < scoreArray.length; i++) {
        myTable.rows[1].cells[i].innerHTML = scoreArray[i];
    }
}
}

//Hide buttons based on pins knocked down
const rackPins = () => {
    let zeroPin = document.getElementById("Zero");
    let onePin = document.getElementById("One")
    let twoPin = document.getElementById("Two")
    let threePin = document.getElementById("Three")
    let fourPin = document.getElementById("Four")
    let fivePin = document.getElementById("Five")
    let sixPin = document.getElementById("Six")
    let sevenPin = document.getElementById("Seven")
    let eightPin = document.getElementById("Eight")
    let ninePin = document.getElementById("Nine")
    let tenPin = document.getElementById("Ten")
    if (pins === 9) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none", sevenPin.style.display = "none", sixPin.style.display = "none", fivePin.style.display = "none", fourPin.style.display = "none", threePin.style.display = "none", twoPin.style.display = "none"
    }
    if (pins === 8) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none", sevenPin.style.display = "none", sixPin.style.display = "none", fivePin.style.display = "none", fourPin.style.display = "none", threePin.style.display = "none"
    }
    if (pins === 7) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none", sevenPin.style.display = "none", sixPin.style.display = "none", fivePin.style.display = "none", fourPin.style.display = "none"
    }
    if (pins === 6) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none", sevenPin.style.display = "none", sixPin.style.display = "none", fivePin.style.display = "none"
    }
    if (pins === 5) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none", sevenPin.style.display = "none", sixPin.style.display = "none"
    }
    if (pins === 4) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none", sevenPin.style.display = "none"
    }
    if (pins === 3) {
        tenPin.style.display = "none", ninePin.style.display = "none", eightPin.style.display = "none"
    }
    if (pins === 2) {
        tenPin.style.display = "none", ninePin.style.display = "none"
    }
    if (pins === 1) {
        tenPin.style.display = "none"
    }
}

const newRackPins = (scoreArr) => {
    if (scoreArray.length % 2 === 0) {
        let zeroPin = document.getElementById("Zero").style.display = "inline";
        let onePin = document.getElementById("One").style.display = "inline";
        let twoPin = document.getElementById("Two").style.display = "inline";
        let threePin = document.getElementById("Three").style.display = "inline";
        let fourPin = document.getElementById("Four").style.display = "inline";
        let fivePin = document.getElementById("Five").style.display = "inline";
        let sixPin = document.getElementById("Six").style.display = "inline";
        let sevenPin = document.getElementById("Seven").style.display = "inline";
        let eightPin = document.getElementById("Eight").style.display = "inline";
        let ninePin = document.getElementById("Nine").style.display = "inline";
        let tenPin = document.getElementById("Ten").style.display = "inline";
    }
}

//compare First roll to Second Roll for each frame
const isSpareOrStrike = (scoreArr) => {
    let frame1A = Number(document.getElementById("frame1a").innerHTML);
    let frame1B = Number(document.getElementById("frame1b").innerHTML);
    if (scoreArr[0] === null && frame1B === 10) {
        myTable.rows[1].cells[1].innerHTML = 'X';
        
    } else if (10 - (frame1A + frame1B) === 0) {
        myTable.rows[1].cells[1].innerHTML = '/';
        
    }

    let frame2A = Number(document.getElementById("frame2a").innerHTML);
    let frame2B = Number(document.getElementById("frame2b").innerHTML);
    if (scoreArr[2] === null && frame2B === 10) {
        myTable.rows[1].cells[3].innerHTML = 'X';
    } else if (10 - (frame2A + frame2B) === 0) {
        myTable.rows[1].cells[3].innerHTML = '/';
    }

    let frame3A = Number(document.getElementById("frame3a").innerHTML);
    let frame3B = Number(document.getElementById("frame3b").innerHTML);
    if (scoreArr[4] === null && frame3B === 10) {
        myTable.rows[1].cells[5].innerHTML = 'X';
    } else if (10 - (frame3A + frame3B) === 0) {
        myTable.rows[1].cells[5].innerHTML = '/';
    }

    let frame4A = Number(document.getElementById("frame4a").innerHTML);
    let frame4B = Number(document.getElementById("frame4b").innerHTML);
    if (scoreArr[6] === null && frame4B === 10) {
        myTable.rows[1].cells[7].innerHTML = 'X';
    } else if (10 - (frame4A + frame4B) === 0) {
        myTable.rows[1].cells[7].innerHTML = '/';
    }

    let frame5A = Number(document.getElementById("frame5a").innerHTML);
    let frame5B = Number(document.getElementById("frame5b").innerHTML);
    if (scoreArr[8] === null && frame5B === 10) {
        myTable.rows[1].cells[9].innerHTML = 'X';
    } else if (10 - (frame5A + frame5B) === 0) {
        myTable.rows[1].cells[9].innerHTML = '/';
    }

    let frame6A = Number(document.getElementById("frame6a").innerHTML);
    let frame6B = Number(document.getElementById("frame6b").innerHTML);
    if (scoreArr[10] === null && frame6B === 10) {
        myTable.rows[1].cells[11].innerHTML = 'X';
    } else if (10 - (frame6A + frame6B) === 0) {
        myTable.rows[1].cells[11].innerHTML = '/';
    }

    let frame7A = Number(document.getElementById("frame7a").innerHTML);
    let frame7B = Number(document.getElementById("frame7b").innerHTML);
    if (scoreArr[12] === null && frame7B === 10) {
        myTable.rows[1].cells[13].innerHTML = 'X';
    } else if (10 - (frame7A + frame7B) === 0) {
        myTable.rows[1].cells[13].innerHTML = '/';
    }

    let frame8A = Number(document.getElementById("frame8a").innerHTML);
    let frame8B = Number(document.getElementById("frame8b").innerHTML);
    if (scoreArr[14] === null && frame8B === 10) {
        myTable.rows[1].cells[15].innerHTML = 'X';
    } else if (10 - (frame8A + frame8B) === 0) {
        myTable.rows[1].cells[15].innerHTML = '/';
    }

    let frame9A = Number(document.getElementById("frame9a").innerHTML);
    let frame9B = Number(document.getElementById("frame9b").innerHTML);
    if (scoreArr[16] === null && frame9B === 10) {
        myTable.rows[1].cells[17].innerHTML = 'X';
    } else if (10 - (frame9A + frame9B) === 0) {
        myTable.rows[1].cells[17].innerHTML = '/';
    }

    let frame10A = Number(document.getElementById("frame10a").innerHTML);
    let frame10B = Number(document.getElementById("frame10b").innerHTML);
    let frame10C = Number(document.getElementById("frame10c").innerHTML);
    if (scoreArr[18] === 10) {
        myTable.rows[1].cells[18].innerHTML = 'X';
        // myTable.rows[1].cells[19].innerHTML = ''
        
    } else if (10 - (frame10A + frame10B) === 0) {
        myTable.rows[1].cells[19].innerHTML = '/';
    }

    if (scoreArr[18]=== 10 && scoreArr[19] === 10){
        myTable.rows[1].cells[19].innerHTML = 'X';
    } else if (10 - (scoreArr[19] + scoreArr[20] && scoreArr[18] !== scoreArr[20]) === 0) {
        myTable.rows[1].cells[20].innerHTML = '/';
    }

    if (scoreArr[18]=== 10 && scoreArr[19] === 10 && scoreArr[20] === 10){
        myTable.rows[1].cells[20].innerHTML = 'X';
    }

}


const calcScore = (scoreArr) => {
    //frame 1
    if (myTable.rows[2].cells[0].innerHTML === '') {
        if (scoreArray[0] === null && scoreArray[2] === null && scoreArray[4] === null) {
            frameOne = scoreArray[1] + scoreArray[3] + scoreArray[5];
        } else if (scoreArray[0] === null && scoreArray[2] === null && scoreArray[4] !== null) {
            frameOne = scoreArray[1] + scoreArray[3] + scoreArray[4]
        } else if (scoreArray[0] === null && scoreArray[2] !== null) {
            frameOne = scoreArray[1] + scoreArray[2] + scoreArray[3]
        } else if (scoreArray[0] + scoreArray[1] === 10 && scoreArray[2] === null) {
            frameOne = scoreArray[0] + scoreArray[1] + scoreArray[3]
        } else if (scoreArray[0] + scoreArray[1] === 10 && scoreArray[2] !== null) {
            frameOne = scoreArray[0] + scoreArray[1] + scoreArray[2]
        } else if (scoreArray[0] + scoreArray[1] !== 10) {
            frameOne = scoreArray[0] + scoreArray[1];
        }
    }

    //frame 2
    if (myTable.rows[2].cells[1].innerHTML === '') {
        if (scoreArray[2] === null && scoreArray[4] === null && scoreArray[6] === null) {
            frameTwo = scoreArray[3] + scoreArray[5] + scoreArray[7];
        } else if (scoreArray[2] === null && scoreArray[4] === null && scoreArray[6] !== null) {
            frameTwo = scoreArray[3] + scoreArray[5] + scoreArray[6]
        } else if (scoreArray[2] === null && scoreArray[4] !== null) {
            frameTwo = scoreArray[3] + scoreArray[4] + scoreArray[5]
        } else if (scoreArray[2] + scoreArray[3] === 10 && scoreArray[4] === null) {
            frameTwo = scoreArray[2] + scoreArray[3] + scoreArray[5]
        } else if (scoreArray[2] + scoreArray[3] === 10 && scoreArray[4] !== null) {
            frameTwo = scoreArray[2] + scoreArray[3] + scoreArray[4]
        } else if (scoreArray[2] + scoreArray[3] !== 10) {
            frameTwo = scoreArray[2] + scoreArray[3];
        }

    }

    //frame 3
    if (myTable.rows[2].cells[2].innerHTML === '') {
        if (scoreArray[4] === null && scoreArray[6] === null && scoreArray[8] === null) {
            frameThree = scoreArray[5] + scoreArray[7] + scoreArray[9];
        } else if (scoreArray[4] === null && scoreArray[6] === null && scoreArray[8] !== null) {
            frameThree = scoreArray[5] + scoreArray[7] + scoreArray[8]
        } else if (scoreArray[4] === null && scoreArray[6] !== null) {
            frameThree = scoreArray[5] + scoreArray[6] + scoreArray[7]
        } else if (scoreArray[4] + scoreArray[5] === 10 && scoreArray[6] === null) {
            frameThree = scoreArray[4] + scoreArray[5] + scoreArray[7]
        } else if (scoreArray[4] + scoreArray[5] === 10 && scoreArray[6] !== null) {
            frameThree = scoreArray[4] + scoreArray[5] + scoreArray[6]
        } else if (scoreArray[4] + scoreArray[5] !== 10) {
            frameThree = scoreArray[4] + scoreArray[5];
        }

    }

    //frame 4
    if (myTable.rows[2].cells[3].innerHTML === '') {
        if (scoreArray[6] === null && scoreArray[8] === null && scoreArray[10] === null) {
            frameFour = scoreArray[7] + scoreArray[9] + scoreArray[11];
        } else if (scoreArray[6] === null && scoreArray[8] === null && scoreArray[10] !== null) {
            frameFour = scoreArray[7] + scoreArray[9] + scoreArray[10]
        } else if (scoreArray[6] === null && scoreArray[8] !== null) {
            frameFour = scoreArray[7] + scoreArray[8] + scoreArray[9]
        } else if (scoreArray[6] + scoreArray[7] === 10 && scoreArray[8] === null) {
            frameFour = scoreArray[6] + scoreArray[7] + scoreArray[9]
        } else if (scoreArray[6] + scoreArray[7] === 10 && scoreArray[8] !== null) {
            frameFour = scoreArray[6] + scoreArray[7] + scoreArray[8]
        } else if (scoreArray[6] + scoreArray[7] !== 10) {
            frameFour = scoreArray[6] + scoreArray[7];
        }

    }

    //frame 5
    if (myTable.rows[2].cells[4].innerHTML === '') {
        if (scoreArray[8] === null && scoreArray[10] === null && scoreArray[12] === null) {
            frameFive = scoreArray[9] + scoreArray[11] + scoreArray[13];
        } else if (scoreArray[8] === null && scoreArray[10] === null && scoreArray[12] !== null) {
            frameFive = scoreArray[9] + scoreArray[11] + scoreArray[12]
        } else if (scoreArray[8] === null && scoreArray[10] !== null) {
            frameFive = scoreArray[9] + scoreArray[10] + scoreArray[11]
        } else if (scoreArray[8] + scoreArray[9] === 10 && scoreArray[10] === null) {
            frameFive = scoreArray[8] + scoreArray[9] + scoreArray[11]
        } else if (scoreArray[8] + scoreArray[9] === 10 && scoreArray[10] !== null) {
            frameFive = scoreArray[8] + scoreArray[9] + scoreArray[10]
        } else if (scoreArray[8] + scoreArray[9] !== 10) {
            frameFive = scoreArray[8] + scoreArray[9];
        }

    }

    //frame 6
    if (myTable.rows[2].cells[5].innerHTML === '') {
        if (scoreArray[10] === null && scoreArray[12] === null && scoreArray[14] === null) {
            frameSix = scoreArray[11] + scoreArray[13] + scoreArray[15];
        } else if (scoreArray[10] === null && scoreArray[12] === null && scoreArray[14] !== null) {
            frameSix = scoreArray[11] + scoreArray[13] + scoreArray[14]
        } else if (scoreArray[10] === null && scoreArray[12] !== null) {
            frameSix = scoreArray[11] + scoreArray[12] + scoreArray[13]
        } else if (scoreArray[10] + scoreArray[11] === 10 && scoreArray[12] === null) {
            frameSix = scoreArray[10] + scoreArray[11] + scoreArray[13]
        } else if (scoreArray[10] + scoreArray[11] === 10 && scoreArray[12] !== null) {
            frameSix = scoreArray[10] + scoreArray[11] + scoreArray[12]
        } else if (scoreArray[10] + scoreArray[11] !== 10) {
            frameSix = scoreArray[10] + scoreArray[11];
        }

    }

    //frame 7
    if (myTable.rows[2].cells[6].innerHTML === '') {
        if (scoreArray[12] === null && scoreArray[14] === null && scoreArray[16] === null) {
            frameSeven = scoreArray[13] + scoreArray[15] + scoreArray[17];
        } else if (scoreArray[12] === null && scoreArray[14] === null && scoreArray[16] !== null) {
            frameSeven = scoreArray[13] + scoreArray[15] + scoreArray[16]
        } else if (scoreArray[12] === null && scoreArray[14] !== null) {
            frameSeven = scoreArray[13] + scoreArray[14] + scoreArray[15]
        } else if (scoreArray[12] + scoreArray[13] === 10 && scoreArray[14] === null) {
            frameSeven = scoreArray[12] + scoreArray[13] + scoreArray[15]
        } else if (scoreArray[12] + scoreArray[13] === 10 && scoreArray[14] !== null) {
            frameSeven = scoreArray[12] + scoreArray[13] + scoreArray[14]
        } else if (scoreArray[12] + scoreArray[13] !== 10) {
            frameSeven = scoreArray[12] + scoreArray[13];
        }

    }

    //frame 8
    if (myTable.rows[2].cells[7].innerHTML === '') {
        if (scoreArray[14] === null && scoreArray[16] === null && scoreArray[18] === null) {
            frameEight = scoreArray[15] + scoreArray[17] + scoreArray[19];
        } else if (scoreArray[14] === null && scoreArray[16] === null && scoreArray[18] !== null) {
            frameEight = scoreArray[15] + scoreArray[17] + scoreArray[18]
        } else if (scoreArray[14] === null && scoreArray[16] !== null) {
            frameEight = scoreArray[15] + scoreArray[16] + scoreArray[17]
        } else if (scoreArray[14] + scoreArray[15] === 10 && scoreArray[16] === null) {
            frameEight = scoreArray[14] + scoreArray[15] + scoreArray[17]
        } else if (scoreArray[14] + scoreArray[15] === 10 && scoreArray[16] !== null) {
            frameEight = scoreArray[14] + scoreArray[15] + scoreArray[16]
        } else if (scoreArray[14] + scoreArray[15] !== 10) {
            frameEight = scoreArray[14] + scoreArray[15];
        }

    }

    //frame 9
    if (myTable.rows[2].cells[8].innerHTML === '') {
        if (scoreArray[16] === null && scoreArray[18] === null && scoreArray[20] === null) {
            frameNine = scoreArray[17] + scoreArray[19] + scoreArray[21];
        } else if (scoreArray[16] === null && scoreArray[18] === null && scoreArray[20] !== null) {
            frameNine = scoreArray[17] + scoreArray[19] + scoreArray[20]
        } else if (scoreArray[16] === null && scoreArray[18] !== null) {
            frameNine = scoreArray[17] + scoreArray[18] + scoreArray[19]
        } else if (scoreArray[16] + scoreArray[17] === 10 && scoreArray[18] === null) {
            frameNine = scoreArray[16] + scoreArray[17] + scoreArray[19]
        } else if (scoreArray[16] + scoreArray[17] === 10 && scoreArray[18] !== null) {
            frameNine = scoreArray[16] + scoreArray[17] + scoreArray[18]
        } else if (scoreArray[16] + scoreArray[17] !== 10) {
            frameNine = scoreArray[16] + scoreArray[17];
        }

    }

    //frame 10 
    if (myTable.rows[2].cells[9].innerHTML === '') {
        if (scoreArray[18] === 10 || scoreArray[18] + scoreArray[19] === 10){
        frameTen = scoreArray[18] + scoreArray[19] + scoreArray[20];
    } else {
        frameTen = scoreArray[18] + scoreArray[19];
    }
    }


    if (frameOne) { myTable.rows[2].cells[0].innerHTML = frameOne }
    if (frameTwo) { myTable.rows[2].cells[1].innerHTML = frameTwo + frameOne }
    if (frameThree) { myTable.rows[2].cells[2].innerHTML = frameOne + frameTwo + frameThree }
    if (frameFour) { myTable.rows[2].cells[3].innerHTML = frameOne + frameTwo + frameThree + frameFour }
    if (frameFive) { myTable.rows[2].cells[4].innerHTML = frameOne + frameTwo + frameThree + frameFour + frameFive }
    if (frameSix) { myTable.rows[2].cells[5].innerHTML = frameOne + frameTwo + frameThree + frameFour + frameFive + frameSix }
    if (frameSeven) { myTable.rows[2].cells[6].innerHTML = frameOne + frameTwo + frameThree + frameFour + frameFive + frameSix + frameSeven }
    if (frameEight) { myTable.rows[2].cells[7].innerHTML = frameOne + frameTwo + frameThree + frameFour + frameFive + frameSix + frameSeven + frameEight }
    if (frameNine) { myTable.rows[2].cells[8].innerHTML = frameOne + frameTwo + frameThree + frameFour + frameFive + frameSix + frameSeven + frameEight + frameNine }
    if (frameTen) { myTable.rows[2].cells[9].innerHTML = frameOne + frameTwo + frameThree + frameFour + frameFive + frameSix + frameSeven + frameEight + frameNine + frameTen }
}


// for (let i=0; i<scoreArray.length; i++){
//     if(myTable.rows[2].cells[i].innerHTML === '') {
//         if (scoreArray[i] === null && scoreArray[i+2] === null && scoreArray[i+4] === null){
//             totalScore += scoreArray[i+1] + scoreArray[i+3] + scoreArray[i+5];
//         } else if (scoreArray[i] === null && scoreArray[i+2] === null){
//             totalScore += scoreArray[i+1] + scoreArray[i+3] + scoreArray[i+4]
//         } else if (scoreArray[i] === null) {
//             totalScore += scoreArray[i+1] + scoreArray[i+2] + scoreArray[i+3]
//         } else if (scoreArray[i] + scoreArray[i+1] === 10 && scoreArray[i+2] === null){
//             totalScore += scoreArray[i] + scoreArray[i+1] + scoreArray[i+3]
//         } else if (scoreArray[i] + scoreArray[i+1] === 10 && scoreArray[i+2] !== null){
//             totalScore += scoreArray[i] + scoreArray[i+1] + scoreArray[i+2]
//         } else {
//             totalScore += scoreArray[i] + scoreArray[i+1]
//         }
//     }

// }









