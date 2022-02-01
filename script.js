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

