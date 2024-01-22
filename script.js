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

function playRound(playerSelection , computerSelection ){
    // console.log(playerSelection , computerSelection +'inside playround')
    if(playerSelection == computerSelection ){
        return('It\'s a Draw');        
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return ('You lose this round');
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return ('You Win this round');
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return ('You lose this round');
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return('You Win this round');
    }
    else if( playerSelection == 'scissors' && computerSelection == 'rock'){
        return ('You lose this round');
    }
    else if( playerSelection == 'scissors' && computerSelection == 'paper' ){
        return ('You Win this round');
    }
}

function getPlayerChoice(){
    let playerChoice = prompt('Enter your choice rock or paper or scisssors').toLowerCase() ;
    
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        //console.log(playerChoice);
        return playerChoice;
    }
    
    else {
        alert(`Enter correct choice`);
        getPlayerChoice();
    }
}

function playMatch(){
    let a = getPlayerChoice();
    let b = getComputerChoice();
    
    console.log(`Your Choice Was ${a} and Computer choice was ${b}`);
    if(a == undefined){
        a = getPlayerChoice()    
    }
    
    let result = playRound(a,b);

    
    console.log(result);  
}

