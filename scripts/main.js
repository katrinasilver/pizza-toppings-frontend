const { renderToppings } = require('./templates')
const { addTopping, getToppings } = require('./toppings')


// attach event to form
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault()

  const name = event.target.toppingName.value
  const deliciousness = parseInt(event.target.deliciousness.value)

  event.target.toppingName.value = ''
  event.target.deliciousness.value = ''
  
  // add toppings
  addTopping(name, deliciousness)

  const toppings = getToppings()
  renderToppings(toppings)

})



// initial render of data
const toppings = getToppings()
renderToppings(toppings)