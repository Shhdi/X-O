<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>shahd</title>
    <link rel="stylesheet" href="style.css">
    <script src="xogame.js" defer></script>
</head>
<body>
<div class="title"><span>X O</span> GAME</div>
<div class="container">
    <div class="square" id="item1" onclick="game(this.id)"></div>
    <div class="square" id="item2" onclick="game(this.id)"></div>
    <div class="square" id="item3" onclick="game(this.id)"></div>

    <div class="square" id="item4" onclick="game(this.id)"></div>
    <div class="square" id="item5" onclick="game(this.id)"></div>
    <div class="square" id="item6" onclick="game(this.id)"></div>

    <div class="square" id="item7" onclick="game(this.id)"></div>
    <div class="square" id="item8" onclick="game(this.id)"></div>
    <div class="square" id="item9" onclick="game(this.id)"></div>
</div>
</body>
</html>
.game{
    width: 255px;
    text-align: center;
    font-family: system-ui;
    color: white;
    margin: auto;
    font-weight: 500px;

}
.title{
    background: #f25;
    padding: 5px 0;
    margin: 5px 0;
    text-align: center;
}
span{
    color: #fa0;
}
.square{
    width: 100px;
    height: 100px;
    background: #f25;
    float: left;
   margin: center;
    font-size: 100px;
    text-align: center;
}
    .container{
    display: grid;
    grid-template-columns: repeat(3,100px);
    grid-template-rows: repeat(3,100px);
    gap: 5px;

}
.square:hover{
    background: #000;
}

let title = document.querySelector('.title');
let turn = 'x';
let squares = [];

function end(num1, num2, num3) {
    title.innerHTML = `${squares[1]} winner`;
    document.getElementById('item' + num1).style.background = '000';
    document.getElementById('item' + num2).style.background = '000';
    document.getElementById('item' + num3).style.background = '000';

    setInterval(function () {
        title.innerHTML += '.';
    }, 1000);
    setTimeout(function ()  {
        location.reload();
    }, 4000);
}

function winner()  {
    for(let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
}

if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')   {
    end(1, 2, 3);
} else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '')    {
    end(4, 5, 6);
}   else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '')   {
    end(7, 8, 9);
}   else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '')   {
    end(1, 4, 7);
}   else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')  {
    end(2, 5, 8);
}    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')  {
    end(3, 6, 9);
}   else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')  {
    end(1, 5, 9);
}   else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '')   {
    end(3, 5, 7);
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x'  && element.innerHTML == '')   {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn === 'o' && element.innerHTML == '') {
    element.innerHTML = 'o';
    turn = 'x';
    title.innerHTML = 'x';
}

    winner();
}
