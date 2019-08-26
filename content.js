//050301
let mainDOM = document.getElementById('main')

console.log(mainDOM.innerHTML)


//050302
let contentDOM = document.getElementById('content')

contentDOM.innerHTML = 'Main Content'


//050303
let productsDOM = document.getElementById('products')

productsDOM.innerHTML = '<div>1</div><div>2</div>'


//050303
let productsDOM = document.getElementById('products')

let products = Array.from(document.getElementsByClassName('product'))


let a =''
console.log("products:",products)

products.forEach(e => {
    a += `<div class="product">${e.innerHTML}</div>`
})

productsDOM.innerHTML = a
