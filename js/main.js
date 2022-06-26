const options = document.querySelectorAll('.options')
const results = document.querySelector('.results')
const gameWinner = document.querySelector('.gameWinner')

let pScore = 0;
let cScore = 0;


options.forEach((option)=>{
    option.addEventListener('click', function(){
        const pInput = this.textContent;

        const cOptions = ['Rock','Paper','Scissors']
        const cInput = cOptions[Math.floor(Math.random()*3)]

        compareInputs(pInput, cInput);
        updateScore();

        if (checkWinner()) {
          pScore = cScore = 0;
          updateScore();
        }

    })
})

function compareInputs(pInput, cInput){
   
    
    
    if(pInput === cInput){
       return  results.innerHTML = ` It's a Tie`
    }

    
  if(pInput === 'Rock' && cInput === 'Scissors' || pInput === 'Paper' && cInput === 'Rock' || pInput === 'Paper' && cInput === 'Rock' ){
    results.innerHTML = `You WIN!`;
    pScore++;
    } else {
        results.innerHTML = `Computer WIN!`;
        cScore++;
    }
}
function updateScore(){
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
}

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? gameWinner.innerHTML = "You win the game! Congratulations!"
        : gameWinner.innerHTML = "Computer wins the game! Try again next time!";
    ;
    return true;
    
  }
  return false;
}


