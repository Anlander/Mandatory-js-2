
let playTurn = "X"


let cell = $(".cell")
console.log(cell)
$( window ).load(function(){
  console.log("ready")
  document.turn = "X";
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



function checkWin(){
  let winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
],
result = [ false, undefined] ;

}

let haveAWinner = checkWin();
if( haveAWinner == "" ) {
 alert( haveAWinner + " won the game!" );
}
/*
let thewinner = $(checkWin);
if ($(thewinner).text("")) {
  alert(thewinner + "won the game");
}


/*
function nextMove(square) {
  console.log("nextmove", square)
  if(square.innerText == ''){
    console.log("turn", document.turn)
    square.innerText = document.turn;
    switchTurn();

}
}

function switchTurn() {
  console.log("switch")
  if(document.turn == "X"){
    console.log("IFX")
    document.turn = "0";
  } else {
    console.log("ElseO")
    document.turn = "X";
  }
}

let checkWin = */
