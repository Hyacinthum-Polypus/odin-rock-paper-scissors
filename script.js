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
            console.error("Invalid player selection! Rock, paper or scissors are the only valid inputs.")
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

function game()
{
    console.log('Best of five!')

    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 3 && computerScore < 3)
    {
        const playerSelection = prompt('Rock Paper Scissors?');
        
        const result = round(playerSelection, computerPlay());

        if(result.substr(0, 8) === 'You Win!')
        {
            playerScore++;
        }
        else if(result.substr(0, 9) == 'You Lose!')
        {
            computerScore++;
        }

        console.log(result);
    }

    if(playerScore > computerScore)
    {
        console.log('You Win! Great Job!');
    }
    else
    {
        console.log('You Lose! Better Luck Next Time!');
    }
}

game();