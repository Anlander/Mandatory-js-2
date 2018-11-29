$(document).ready(() => {
    console.log('Ready')
    let squareOne = $("#s1");
    let squareTwo = $("#s2");
    let squareThree = $("#s3");
    let squareFour = $("#s4");
    let squareFive = $("#s5");
    let squareSix = $("#s6");
    let squareSeven = $("#s7");
    let squareEight = $("#s8");
    let squareNine = $("#s9");
    let tableDetail = $("td");
    let button = $("button");
    let winnningDiv = $(".winning");
    let playTurn = "X";
    let checkXWin = "X";
    let checkOWin = "O";

    $(button).click(() => {
        $(tableDetail).text("")
        $(winnningDiv).text("")
        $("table").show()
        playTurn = "X"
    })
    function checkTurn(square) {
        if($(square).text() === "") {
            if(playTurn === "X") {
                $(square).text("X")
                playTurn = "O"
            } else {
                $(square).text("O")
                playTurn = "X"
            }
        } else {
            return null
        }
    }

    function checkIfXWins() {
        $("table").hide()
        $(winnningDiv).text("X wins").css("font-size", "400%");
    }
    function checkIfOWins() {
        $("table").hide()
        $(winnningDiv).text("O wins").css("font-size", "400%");
    }
    function checkWin() {
        if($(squareOne).text() === checkXWin && $(squareTwo).text() === checkXWin && $(squareThree).text() === checkXWin) {
            console.log('First X Win')
            checkIfXWins()
        } else if($(squareOne).text() === checkOWin && $(squareTwo).text() === checkOWin && $(squareThree).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareFour).text() === checkXWin && $(squareFive).text() === checkXWin && $(squareSix).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareFour).text() === checkOWin && $(squareFive).text() === checkOWin && $(squareSix).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareSeven).text() === checkXWin && $(squareEight).text() === checkXWin && $(squareNine).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareSeven).text() === checkOWin && $(squareEight).text() === checkOWin && $(squareNine).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareOne).text() === checkXWin && $(squareFour).text() === checkXWin && $(squareSeven).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareOne).text() === checkOWin && $(squareFour).text() === checkOWin && $(squareSeven).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareTwo).text() === checkXWin && $(squareFive).text() === checkXWin && $(squareEight).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareTwo).text() === checkOWin && $(squareFive).text() === checkOWin && $(squareEight).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareThree).text() === checkXWin && $(squareSix).text() === checkXWin && $(squareNine).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareThree).text() === checkOWin && $(squareSix).text() === checkOWin && $(squareNine).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareOne).text() === checkXWin && $(squareFive).text() === checkXWin && $(squareNine).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareOne).text() === checkOWin && $(squareFive).text() === checkOWin && $(squareNine).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else if($(squareThree).text() === checkXWin && $(squareFive).text() === checkXWin && $(squareSeven).text() === checkXWin) {
            console.log('X Win')
            checkIfXWins()
        } else if($(squareThree).text() === checkOWin && $(squareFive).text() === checkOWin && $(squareSeven).text() === checkOWin) {
            console.log('O Win')
            checkIfOWins()
        } else {
            for(let i = 0; i < tableDetail.length; i++) {
                if($(tableDetail[i]).text() !== "") {
                    console.log('FOREN')
                } else {
                    console.log('else', $(tableDetail[i]).text())
                }
            }
        }
      }

      tableDetail.each((index) => {
          let square = tableDetail[index]
          $(square).click(() => {
              checkTurn(square)
              checkWin()
          })
      })
  })
