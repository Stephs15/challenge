/*
    Problem is not very well explained.

    Open questions
        * If all money is lost do we keep betting 0.5 or is the game considered lost?
        * Do we bet 0.5 each time or we bet everything as long as there is something?
*/

const getRandomNumber = () => Math.floor( Math.random() * 6 ) + 1;


/*
    Assumptions:
        * All in for every bet as long as there is money left
        * If all money is lost we start over with 0.5
*/

const getRandomNumber = () => Math.floor( Math.random() * 6 ) + 1;

const calculateWinnings = (money) => {
    let lost = 0;
    for (let x = 0; x < 1000 ; x++) {
        let number = getRandomNumber() +  getRandomNumber()
        switch(number) {
            case 12:
                money *= 4;
                break;
            case 11:
                money *= 3;
                break;
            case 10:
                money *= 2;
                break;
            case 2: case 3: case 4: case 5: case 6:
                lost += Math.abs(money);
                money = 0;
                break;
            default:
                break;
        }
        
        // If all money is lost then the bet is .5c otherwise all in
        if(money <= 0)
            money = 0.5;
    }

    return {result: money, lost: lost};
}

/*
    Assumptions:
        * Only bet 0.5 each time
        * If all money is lost we start over with 0.5
*/
const calculateWinnings2 = (money, baseBet, times) => {
    let lost = 0;
    
    for (let x = 0; x < times ; x++) {
        // If we ran out of money, start over with 0.5
        if(money <= 0)
            money = 0.5;

        let number = getRandomNumber() +  getRandomNumber()
        switch(number) {
            case 12:
                money += baseBet * 4;
                break;
            case 11:
                money += baseBet * 3;
                break;
            case 10:
                money += baseBet * 2;
                break;
            case 2: case 3: case 4: case 5: case 6:
                lost += 0.5;
                money -= 0.5;
                break;
            default:
                break;
        }
        // console.log(number, money, lost)
    }
    return {result: money, lost: lost};
}

const playTheGame = (bet) => {
    let res = calculateWinnings(bet);
    console.log('Result: ', res.result)
    console.log('Lost: ', res.lost)
}