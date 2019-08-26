//050501
// let switchOnOff = (element) => {
//     if(element.classList=='on'){
//         element.classList.remove('on')
//         element.classList.add('off')
//         element.innerHTML = 'OFF'
//     }
//     else{
//         element.classList.remove('off')
//         element.classList.add('on')
//         element.innerHTML = 'ON'
//     }
// }


//050502
// let getNum = () => {
//     let num1 = Number(document.getElementById('num1').value)
//     let num2 = Number(document.getElementById('num2').value)
//     document.getElementById('total').innerHTML = num1 + num2
// }

//050503

let email = ''

let send = (event) => {

    if (email.includes('@')) {
        document.getElementById('message').innerHTML = "Thank you for signing up"
        document.getElementById('message').classList.add('success')
    }
    else {
        document.getElementById('message').innerHTML = "Sorry, please provide a valid email address"
        document.getElementById('message').classList.add('error')
    }

    event.preventDefault()
}


let getEmail = (e) => {
    email = e.value
}