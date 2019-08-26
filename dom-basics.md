## DOM

Document Object Model. 
Javascript manipulating html doc.

document.property
document.method()

## Steps

1- Adding `<script/>` source as a link in `<head/>` of html file.

2- Add html file to the js file wyth syntax: <br>
```js
document.getElementById('id of a html tag')
```

3 - Remember to add `defer` attribute in script tag in html to load script only when the whole html doc is read.<br>
```js
<script src= "script.js" defer> </script>
```

4- Work on he js file. For example: you can create js variables equal to html elements. <br>
```js
let titleDOM = document.getElementById('title')

console.log(titleDOM) // <div class="title">This is my title</div>
console.log(titleDOM.innerHTML) // "This is my title"
```
or
```js
titelDOM.innerHTML = 'Something else'
```
or
```js
titelDOM.innerHTML = 'Something else <span>Yo!!</span>'
//if you console.log you will also see the span inside the html string
```

**.innerHTML** allows you to access what is inside he html tag, instead of accessing the whole html element.

More examples: You can write html inside js:
```js
let mainDOM = document.getElementById('main')

let mainDOM.innerHTML = '<div>HI!</div>'
```

Adding functions into DOM is fun:

```js 
let time =0
 setInterval (()=> {
    time += 1
    mainDOM.innerHTML = "this is ${time}"
 },1000)
 //every second the second will be loaded on the html page 
```

more:
```js
let fruits = [apple, banana, cherry]

fruits.forEach(f => {
    mainDOM.innerHTML += `<li>${f}</li>`
})
```
```html
<!-- in html -->
<div id="main">
    <li>apple</li>
    <li>banana</li>
    <li>cherry</li>
</div>
```


### Changing Classes instead of ID
Id is unique to only one html tag, use class to attach multiple elements.

```js
let fruits = [apple, banana, cherry]

fruits.forEach(f => {
    mainDOM.innerHTML += `<li class="item">${f}</li>`
})

let array = Array.from(document.getElementByClassName('item'))

array.forEach((e,i)=> e.innerHTLM += i)

//apple0
//banana1
//cherry2
```

### Notes
- **.classList** allows to see the classes within an element.
- HTML elements can have multiple classes
- to make array out of html elements use:<br>
```js
Array.from(document.getElementsByClassName('class name'))
```
- some reserved words are very useful such as `this` and `event`. Use it when calling a function. <br>
They are passed as parameters when calling a function. 
`This` is basically the element that the function is executed. Ie. a button element. 

- `event.stopPropagation()` allows to stop the **bubbling** effect. Basically if a child is executed, don't allow to affect the parent one.
- html elements can keep adding different classes and functions inside. Common ones are: 
    - onclick
    - onsubmit
    - onkeyup (to access the words/data that is being typed)

- `event.preventDefault()` prevents the function such as submiting a form to execute its default mode like refreshing the page right after clicking submitting.

- To access the `<input>` results use `element.value`

