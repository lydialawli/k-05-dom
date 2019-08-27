let oppArray = Array.from(document.getElementById('opponent').getElementsByClassName('option'))

let outcome = document.getElementById('outcome')

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
        return ['tie', opponent]
    else if (opponent == 'rock' && hand == 'scissors')
        return ['lose', opponent]
    else if (opponent == 'rock' && hand == 'paper')
        return ['win', opponent]
    else if (opponent == 'scissors' && hand == 'paper')
        return ['lose', opponent]
    else if (opponent == 'scissors' && hand == 'rock')
        return ['win', opponent]
    else if (opponent == 'paper' && hand == 'rock')
        return ['lose', opponent]
    else { return ['win', opponent] }
}

let play = (hand) => {
    let array = getWhoWins(hand)
    let result = array[0]
    let oppAnswer = array[1]

    console.log('me:', hand,'opp:',oppAnswer)
    console.log('result:', result)

    // console.log(result, oppAnswer)
    outcome.innerHTML = result

    oppArray.forEach(e => {
        if (e.id == oppAnswer)
            e.classList.remove('hidden')
        else { e.classList.add('hidden') }
    })
}


