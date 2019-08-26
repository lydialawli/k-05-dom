//050401
let classes = document.getElementById('main').classList

console.log(classes)


//050402
let selected = Array.from(document.getElementsByClassName('selected'))

selected.forEach(e => {
    e.classList.add('primary')
})


//050403
let selected = Array.from(document.getElementsByClassName('selected'))

selected.forEach(e => {
    if(!e.classList.contains('primary'))
        e.classList.remove('selected')
})