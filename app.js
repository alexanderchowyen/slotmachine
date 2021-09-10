// Slot machine will have two buttons +50 and -5
// Players money will start at 100
// As player bets they will either gain $50 or lose $5




//variables

const playerMoney = document.getElementById("playerMoney");
const bet5 = document.getElementById("bet5");
const bet50 = document.getElementById("bet50");
const message = document.getElementById("message");
const slot1 = document.getElementById("slot1"); 
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");


//FUNCTIONS
//player bet 5 functions
function playerBet5(){
  if(+playerMoney.textContent >= 5){
  slot1.textContent = Math.ceil(Math.random()* 5);
  slot2.textContent = Math.ceil(Math.random()* 5);
  slot3.textContent = Math.ceil(Math.random()* 5);
  playerUpdateCash(-5)
  if(checkWin()) {
    playerUpdateCash(50);
    
  }

  }
  
}

//players money will update on clicks
function playerUpdateCash(number){
  playerMoney.textContent = +playerMoney.textContent + number;
}
//player bet 50 functions
function playerBet50(){
  if(+playerMoney.textContent >= 50){
  slot1.textContent = Math.ceil(Math.random()* 5);
  slot2.textContent = Math.ceil(Math.random()* 5);
  slot3.textContent = Math.ceil(Math.random()* 5);
  playerUpdateCash(-50)
 if(checkWin()) {
   playerUpdateCash(500);
 }
 }
}

function checkWin(){
  return slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent

}




//eventlistners
bet5.addEventListener("click", playerBet5);
bet50.addEventListener("click", playerBet50)
