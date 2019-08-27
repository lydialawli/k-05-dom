let oppArray = Array.from(document.getElementById('opponent').getElementsByClassName('option'))
let outcome = document.getElementById('outcome')
let chances = ['lose', 'win', 'tie']

let randomNum = () => {
    return Math.floor(Math.random() * Math.floor(3))
}

let play = (myHand) => {
    let result = chances[randomNum()]
    //console.log(result, myHand)
    outcome.innerHTML = result

    if (result == 'tie') {
        setOppHand(myHand)
    }

    else if (result == 'lose') {
        switch (myHand) {
            case 'rock':
                setOppHand('paper')
                break
            case 'paper':
                setOppHand('scissors')
                break
            default:
                setOppHand('rock')
        }
    }

    else {
        switch (myHand) {
            case 'rock':
                setOppHand('scissors')
                break
            case 'paper':
                setOppHand('rock')
                break
            default:
                setOppHand('paper')
        }
    }
}

let setOppHand = (hand) => {
    oppArray.forEach(e => {
        if (e.id == hand)
            e.classList.remove('hidden')
        else { e.classList.add('hidden') }
    })
}