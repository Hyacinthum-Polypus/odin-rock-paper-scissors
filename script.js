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

const para = document.getElementById('content');

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => para.textContent = round('rock', computerPlay()));

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => para.textContent = round('paper', computerPlay()));

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => para.textContent = round('scissors', computerPlay()));

