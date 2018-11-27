
let playTurn = "X"


let cell = $(".cell")
console.log(cell)
$( window ).load(function(){
  console.log("ready")
  playTurn = "X";
  $("button").click(function(){

    cell.text("")
    console.log("start", document.turn)
  })
})

let tableDetail = $("td")
    tableDetail.each((index) => {
        let square = tableDetail[index]
        $(square).click(() => {
            nextMove(square)
            checkWin()
        })
    })

  function nextMove(square) {
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



var win1 = $('#s1');
var win2 = $('#s2');
var win3 = $('#s3');
var win4 = $('#s4');
var win5 = $('#s5');
var win6 = $('#s6');
var win7 = $('#s7');
var win8 = $('#s8');
var win9 = $('#s9');


function checkWin() {
  if ($(win1).text("X") && $(win2).text("X") && $(win3).text("X")) {
    winner("X");
  } else if ($(win1).text("O") && $(win2).text("O") && $(win3).text("O")) {
    winner("O");
  }

  else if ($(win4).text("X") && $(win5).text("X") && $(win6).text("X")) {

  } else if ($(win4).text("O") && $(win5).text("O") && $(win6).text("O")) {

  }

  else if ($(win7).text("X") && $(win8).text("X") && $(win9).text("X")) {

  } else if ($(win7).text("O") && $(win8).text("O") && $(win9).text("O")) {

  }

  else if ($(win5).text("X") && $(win2).text("X") && $(win8).text("X")) {

  } else if ($(win5).text("O") && $(win2).text("O") && $(win8).text("O")) {

  }

  else if ($(win6).text("X") && $(win9).text("X") && $(win3).text("X")) {

  } else if ($(win6).text("O") && $(win9).text("O") && $(win3).text("O")) {

  }

  else if ($(win1).text("X") && $(win5).text("X") && $(win9).text("X")) {

  } else if ($(win1).text("O") && $(win5).text("O") && $(win9).text("O")) {

  }

  else if ($(win5).text("X") && $(win7).text("X") && $(win3).text("X")) {

  } else if ($(win5).text("O") && $(win7).text("O") && $(win3).text("O")) {

  }
}




function winner() {
 if (checkWin==true){
   alert("congrats you won")
 }
}
