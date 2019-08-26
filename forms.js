//050501
let switchOnOff = (element) => {
    if(element.classList=='on'){
        element.classList.remove('on')
        element.classList.add('off')
        element.innerHTML = 'OFF'
    }
    else{
        element.classList.remove('off')
        element.classList.add('on')
        element.innerHTML = 'ON'
    }
}