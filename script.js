function computerPlay()
{
    //Roll a 100 sided dice and return the remainder of 3.
    const diceRoll = Math.floor(Math.random() * 100 % 3);

    switch(diceRoll)
    {
        case 0:
            return 'rock';
        break;
        case 1:
            return 'paper';
        break;
        case 2:
            return 'scissors';
        break;
    }
}

function round(playerSelection, computerSelection)
{
    //Remove capitalisation from player selection.
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection)
    {
        case computerSelection:
            return `Draw! ${capitalise(playerSelection)} ties with ${capitalise(computerSelection)}`;
        case 'rock':
            switch(computerSelection)
            {
                case 'paper':
                    return 'You Lose! Paper beats Rock!';
                case 'scissors':
                    return 'You Win! Rock beats Scissors!';
            }
        case 'paper':
            switch(computerSelection)
            {
                case 'rock':
                    return 'You Win! Paper beats Rock!';
                case 'scissors':
                    return 'You Lose! Scissors beats Paper!';
            }
        case 'scissors':
            switch(computerSelection)
            {
                case 'rock':
                    return 'You Lose! Rock beats Scissors!';
                case 'paper':
                    return 'You Win! Scissors beats Rock!';
            }
        default:
            throw Error("Invalid player selection! Rock, paper or scissors are the only valid inputs.")
    }
}

function capitalise(word)
{
    word = word.split('');

    word[0] = word[0].toUpperCase();

    for(let letter = 1; letter < word.length; letter++)
    {
        word[letter] = word[letter].toLowerCase();
    }

    return word.join('');
}

const resultOutput = document.getElementById('result');
const scoreTally = document.getElementById('score');

const playerChoiceSpan = document.getElementById('player-choice');
const computerChoiceSpan = document.getElementById('computer-choice');

function setIcons(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection)
    {
        case 'rock':
            playerChoiceSpan.textContent = '🪨';
        break;
        case 'paper':
            playerChoiceSpan.textContent = '🧻';
        break;
        case 'scissors':
            playerChoiceSpan.textContent = '✂️';
        break;
    }

    switch(computerSelection)
    {
        case 'rock':
            computerChoiceSpan.textContent = '🪨';
        break;
        case 'paper':
            computerChoiceSpan.textContent = '🧻';
        break;
        case 'scissors':
            computerChoiceSpan.textContent = '✂️';
        break;
    }
}

let humanScore = 0;
let computerScore = 0;

function game(playerSelection)
{
    const computerSelection = computerPlay();

    const result = round(playerSelection, computerSelection)

    if(humanScore < 5 && computerScore < 5)
    {
        if(result.substr(0, 8) === 'You Win!')
        {
            humanScore++;
        }
        else if(result.substr(0, 9) == 'You Lose!')
        {
            computerScore++;
        }

        setIcons(playerSelection, computerSelection);

        resultOutput.textContent = result;
        scoreTally.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

        if(humanScore === 5)
        {
            scoreTally.textContent = "Human Wins! Great Job!";
        }
        else if(computerScore === 5)
        {
            scoreTally.textContent = "You Lose! Better Luck Next Time!";
        }
    }
}


const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => game('rock'));

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => game('paper'));

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => game('scissors'));

