document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false;
    let arr = Array(9).fill(undefined);

    let btn = document.createElement("button");
    btn.classList.add("start-button");
    btn.textContent = "Start Button";
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        if(chance==false){
            btn.style.display = "none";
            resetBoard();

        }
    });
    outer.addEventListener("click", (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        console.log(cellNumber);

        if(cell.getAttribute("data-clicked")){
            return;
        }
        cell.setAttribute("data-clicked", "true");
        if(chance == true){
            cell.textContent = "X";
            arr[cellNumber] = "X";
            winningCombo("X");
        }
        else{
            cell.textContent = "O";
            arr[cellNumber] = "O"
            winningCombo("O");
        }
        console.log(arr);
        chance = !chance;  // toggle chance
        checkDraw();
    });

    function winningCombo(char){
        if(arr[0]==char && arr[1]==char && arr[2]==char){
            // the f0th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[3]==char && arr[4]==char && arr[5]==char){
            // the f1th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[6]==char && arr[7]==char && arr[8]==char){
            // the f2th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[0]==char && arr[3]==char && arr[6]==char){
            // the f3th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[1]==char && arr[4]==char && arr[7]==char){
            // the f0th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[2]==char && arr[5]==char && arr[8]==char){
            // the f0th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[0]==char && arr[4]==char && arr[8]==char){
            // the f0th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
        if(arr[2]==char && arr[4]==char && arr[6]==char){
            // the f0th row having the char
            setTimeout(() => {
                alert(`${char} wins!`);
                resetBoard();
                showStartButton();
            }, 100);
        }
    }

    function checkDraw(){
        setTimeout(() => {
            if(arr.every(cell => cell!=undefined)){
                alert("It's a draw");
                resetBoard();
                showStartButton();
            }
        }, 100);
        
    }
    function resetBoard(){
        arr = Array(9).fill(undefined);
        document.querySelectorAll(".inner").forEach(cell =>{
            cell.textContent = "";
            cell.removeAttribute("data-clicked");
        });
        chance = false;
    }
    

    function showStartButton(){
        btn.style.display = "block";
    }
});  
