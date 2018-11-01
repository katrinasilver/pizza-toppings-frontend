const { renderToppings } = require('./renderToppings')
const { addTopping, getToppings } = require('./toppings')
//use axios to get data from a server - url below is an API, with the name of the server (immense-lake.82822) and a path of where the data lives (toppings)

// attach event to form
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault()

  const name = event.target.toppingName.value
  const deliciousness = parseInt(event.target.deliciousness.value)

  event.target.toppingName.value = ''
  event.target.deliciousness.value = ''

  // add toppings
  addTopping(name, deliciousness) // go to toppings.js to see the promise
  .then((response) => getToppings())
  .then((response) => renderToppings(response.data.toppings))
})

// initial render of data
getToppings() // go to toppings.js to see the promise
.then((response) => renderToppings(response.data.toppings)) // axios functions take a response param!!!
