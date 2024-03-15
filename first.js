let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbutton");

let turnO = true; //playerX , playerY
 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 6],
    [6, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            //playerO
            box.innerText = "O" ;
            turnO = false;
        } else {
            // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinnner();
        });
    });

    const checkWinnner = () => {
        for( let pattern of winPatterns){
            console.log(pattern);
        }
}