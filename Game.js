const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const guessField=document.querySelector('.guessField');
const guessSubmit=document.querySelector('.guessSubmit');
const HighOrLow=document.querySelector('.HighOrLow');
let randomNumber=Math.floor(Math.random()*100)+1;
let guessCount=1;
let resetButton;


function checkGuess(){
    let userGuess=Number(guessField.value);

    if(guessCount===1){
        guesses.textContent+='Previous_Guesses :';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess===randomNumber){
        lastResult.textContent='Congraluations!! You have guessed it correctly!';
        lastResult.style.backgroundColor = 'green';
        HighOrLow=''
        setGameOver();
    }else if(guessCount===10){
        lastResult.textContent='!!!Game Over !!! No more turns!';
        lastResult.style.backgroundColor = 'red';
        HighOrLow='';
        setGameOver();
    }else{
        if(userGuess<randomNumber){
            lastResult.textContent='You are guess is too low!';
            lastResult.style.backgroundColor = 'red';
        }else if(userGuess>randomNumber){
            lastResult.textContent='You are guess is too high';
            lastResult.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    guessField.value='';
    guessField.focus();

}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='Start a new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame)

}

function resetGame(){
    guessCount=1

    let paras=document.querySelectorAll('.results p');

    for(var i=0;i<paras.clientHeight;i++){
        paras[i].textContent='';
    }

    guessField.value='';
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.focus();
    lastResult.style.backgroundColo=white;
    let randomNumber=Math.floor(Math.random()*100)+1;



}