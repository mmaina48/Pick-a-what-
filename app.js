const computerChoice = document.getElementById('computer-choice')
const playerpick = document.getElementById('player-pick')
const resultDisplay = document.getElementById('result')
const playerPicks = document.querySelectorAll('button')

let playerChoice

playerPicks.forEach(playerPick => playerPick.addEventListener('click', (event) =>{
    playerChoice = event.target.id
    playerpick.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // the 3 is playerPicks.length
    if(randomNumber === 1){
        computerPick = 'rock'
    }
    if(randomNumber === 2){
        computerPick = 'scissors'
    }
    if(randomNumber === 3){
        computerPick = 'paper'
    }
    
    computerChoice.innerHTML = computerPick
}

function getResult(){
    if(computerPick === playerChoice){
        result = 'Draw'
    }
    if(computerPick === 'rock' && playerChoice === 'paper'){
        result = 'You Win'  
    }
    if(computerPick === 'rock' && playerChoice === 'scissors'){
        result = 'You Loose'
    }
    if(computerPick === 'paper' && playerChoice === 'scissors'){
        result = 'You Win'
    }
    if(computerPick === 'paper' && playerChoice === 'rock'){
        result = 'You Loose'
    }
    if(computerPick === 'scissors' && playerChoice === 'paper'){
        result = 'You Loose'
    }
    if(computerPick === 'scissors' && playerChoice === 'rock'){
        result = 'You Win'
    }
    resultDisplay.innerHTML = result
}