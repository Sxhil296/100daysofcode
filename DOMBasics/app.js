// const messageEl = document.getElementById('message')
// messageEl.innerText = "Get element by ID"
// messageEl.addEventListener('mouseover', () => {
//     alert('Hello, DOM!')
// })




// const btn = document.getElementById('btnRate')
// const outputEL = document.getElementById("output")

// btn.addEventListener('click', () => {
// let rates = document.getElementsByName('rate')
// rates.forEach((rate) => {
//     if(rate.checked){
//         outputEL.innerText = `You selected : ${rate.value}`
//     }
// })
// })


// const btnEl = document.getElementById('btnCount')
// btnEl.addEventListener('click', () => {
//     let heading = document.getElementsByTagName('h2')
//     alert(`The number of H2 tags are : ${heading.length}`)
// })




// let menuEl = document.getElementById('menu')
// let itemsEl = document.getElementsByClassName('item')

// let dataEl = [].map.call(itemsEl, item => item.textContent)
// console.log(dataEl);


 //universal selector
// let element = document.querySelector('*')
// console.log(element)

// let elements = document.querySelectorAll('*')
// console.log(elements)

 //type selector
// let heading1 = document.querySelector('h1')
// console.log(heading1)
// let heading2 = document.querySelectorAll('h2')
// console.log(heading2)

 //class selector
// let note = document.querySelector('.menu-item')
// console.log(note)
// let notes = document.querySelectorAll('.menu-item')
// console.log(notes)

 //id selector
// let logo = document.querySelector('#logo')
// console.log(logo)

 //pseudo classes
// let listItem = document.querySelectorAll('li:nth-child(2)')
// console.log(listItem)


// let imgEl = document.querySelector('img')
// console.log(imgEl.parentNode)


//similarly nextElementSibling and previousElementSibling and children



//create element
let div = document.createElement('div')
div.id = 'content'
div.innerHTML = '<p>CreateElement example</p>';
document.body.appendChild(div)

let h2 = document.createElement('h2')
h2.id = 'heading2'
h2.textContent = 'Add h2 element to the page'
div.appendChild(h2)