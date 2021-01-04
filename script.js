// alert("js activated");

let x=true;
let y=true;

let ball = document.querySelector(".ball");
let board = document.querySelector(".board"); // finding the cordinates of the board
let boardBounds = board.getBoundingClientRect();

function moveBall(){
    let ballcord=ball.getBoundingClientRect();
let ballTop = ballcord.top;
let ballLeft = ballcord.left;
let ballBottom = ballcord.bottom;
let ballRight = ballcord.right;
 
// is the ball in the bound
// handle vertical bound
// handle Horizontal

if(ballTop<=boardBounds.top || ballBottom>=boardBounds.bottom){
    //vertically outside
    y=!y;
}

if(ballLeft<=boardBounds.left || ballRight>=boardBounds.right){
    //horizontally outside
    x=!x;
}




ball.style.top=y==true?ballTop+4+"px":ballTop-4+"px";
ball.style.left=x==true?ballLeft+4+"px":ballLeft-4+"px";
requestAnimationFrame(moveBall);

}

requestAnimationFrame(moveBall);