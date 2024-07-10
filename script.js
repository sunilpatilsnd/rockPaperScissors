function getComputerChoice(){
    const computerChoice = '';
    let randNum ;
    randNum = Math.floor(Math.random() * 3 );
    // console.log(randNum);
    //return `paper`; // testing by default rock
   if( randNum == 0){
        return `rock`;
   }
   else if( randNum == 1){
        return `paper`;
   }
   else{
        return `scissors`;
   }    
}

function getPlayerChoice(){
    let playerChoice = prompt('Enter your choice rock or paper or scisssors');
    if(playerChoice == null){
        alert(`This is a Rock, Paper or Scissors game you need to enter correct input`);
        return getPlayerChoice();             
    }
    playerChoice = playerChoice.toLowerCase().trim(); 
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        //console.log(playerChoice);
        return playerChoice;
    }
    else {
        alert(`Enter correct choice Rock, Paper or Scissors`);
        return getPlayerChoice();
    }
}

function getWinner(playerSelection , computerSelection ){
    // console.log(playerSelection , computerSelection +'inside playround')
    if(playerSelection == computerSelection ){
        return('None');        
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return ('computer');
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return ('player');
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return ('computer');
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return('player');
    }
    else if( playerSelection == 'scissors' && computerSelection == 'rock'){
        return ('computer');
    }
    else if( playerSelection == 'scissors' && computerSelection == 'paper' ){
        return ('player');
    }
}

function playRound(playerChoice){    
    let compChoice = getComputerChoice();       
    let result = getWinner(playerChoice,compChoice);
    const resultTxt =   `Your Choice Was ${playerChoice.toUpperCase()} and Computer choice was ${compChoice.toUpperCase()} 
        Winner of this round is ${result.toUpperCase()}`;  
    showResultUI(resultTxt);
    return result;
}

function game(){
    let rounds = 0;
    let result = '';
    let playerWins = 0;
    let compWins = 0;
    while( rounds < 5 ){
        result = playRound();
        if(result == 'player'){
            playerWins++ ;
        }
        else if(result == 'computer'){
            compWins++ ;
        }
        else{
            rounds-- ; 
            // console.log(rounds+'when no one won');
        }
        rounds++ ;
        // console.log(rounds);
    }    
    if(playerWins > compWins){
        return(`Player Won this game by ${playerWins - compWins} ${playerWins - compWins > 1 ? 'rounds' : 'round'}
                Playerscore: ${playerWins}
                ComputerScore: ${compWins}`);
    }
    else if(playerWins < compWins){
        return(`Computer Won this game by  ${compWins - playerWins}  ${compWins - playerWins > 1 ? 'rounds' : 'round'}
        Playerscore: ${playerWins}
        ComputerScore: ${compWins}`)
    }
}


function startGame(){
    let choices = ['rock','paper','scissors'];
    const gameContainer = document.querySelector('#startGame');
    const gameBtn = document.querySelector('#gameBtn');
    
    for (let i= 0; i < choices.length; i++){
        const container = document.querySelector('#game');
        const content = document.createElement('button');        
        content.id = choices[i];        
        content.textContent =choices[i].toUpperCase();
        container.appendChild(content);
        content.setAttribute("onclick", `playRound('${content.id}')`);
        
    }
    gameContainer.removeChild(gameBtn);
}
// alert(game());

function showResultUI(resultTxt){
    const container = document.querySelector('#game');
    const content = document.createElement('p');
    content.textContent = resultTxt;
    container.appendChild(content);
}