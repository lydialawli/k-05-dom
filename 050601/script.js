

let randomNum = () => {
    return Math.floor(Math.random() * Math.floor(3))
}

let opponentHand = () => {
    let num = randomNum()
    if (num == 0) { return 'rock' }
    else if (num == 1) { return 'paper' }
    else { return 'scissors' }

}


let getWhoWins = (hand) => {
    let opponent = opponentHand()
    if (opponent == hand)
        return 'tie'
    else if (opponent == 'rock' && hand == 'scissors')
        return 'loose'
    else if (opponent == 'scissors' && hand == 'rock')
        return 'win'
    else { return 'loose' }
}

let play = (hand) => {
    let answer = getWhoWins(hand)

    let opp = document.getElementById('opponent')
  
  

}

