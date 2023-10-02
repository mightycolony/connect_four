console.log('Hello World!');
//var player1 = prompt("Enter player 1 name u will be in blue team!")
//var player2 = prompt("Enter player 2 name u will be in red team!")
var player1 = "red";
var player2 = "blue";
var players = [player1, player2];
console.log(players)

let currentPlayerIndex = 0;

function switchPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    return players[currentPlayerIndex];
  }

 $('table td').click(function () {
  var rowIndex = $(this).parent().index();
  var cellIndex = $(this).index()
  if (rowIndex === 0) {
    let rowIndex = 5;
    if (isRowFull(rowIndex, cellIndex)) {
      console.log(isRowFull(rowIndex));
      coloring(rowIndex, cellIndex,switchPlayer());
    } else {
      rowIndex = 4;
      if (isRowFull(rowIndex, cellIndex)) {
        coloring(rowIndex, cellIndex,switchPlayer());
      } else {
        rowIndex = 3;
        if (isRowFull(rowIndex, cellIndex)) {
          coloring(rowIndex, cellIndex,switchPlayer());
        } else {
          rowIndex = 2;
          if (isRowFull(rowIndex, cellIndex)) {
            coloring(rowIndex, cellIndex,switchPlayer());
          } else {
            rowIndex = 1;
            if (isRowFull(rowIndex, cellIndex)) {
              coloring(rowIndex, cellIndex,switchPlayer());
            }
          }
        }
      }
    }
  }
});

function coloring(row, col,player) {
  var cell = $('table tr').eq(row).find('td').eq(col);
  if (cell.css("background-color") === 'rgba(0, 0, 0, 0)') {
    cell.css("background-color", player);
  }
}

function isRowFull(rowval,colval) {
  var x =  $('table tr').eq(rowval).find('td').eq(colval);
  if(x.css("background-color") === 'rgba(0, 0, 0, 0)'){ // Return true if background color is red
    return true
} else {
    return false
  }
}
