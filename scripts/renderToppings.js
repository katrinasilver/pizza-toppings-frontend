const { getToppings, deleteTopping, updateTopping } = require('./toppings')
const { addEventListenerAll } = require('./utils')
const { setEditing, getEditing, resetEditing } = require('./editing')

const renderToppings = (toppings) => {
  const location = document.querySelector('.toppings')
  const currentEditing = getEditing()
  // const toppings = getToppings()

  // create array of list items
  const appliedTemplateArray = toppings.map(topping =>
    topping.id === currentEditing
      ? toppingEditingTemplate(topping)
      : toppingTemplate(topping)
  )

  // clean out DOM
  location.innerHTML = ''

  // add list items to DOM
  location.innerHTML = appliedTemplateArray.join('\n')

  // add event listeners for new elements in the DOM

  // delete list item
  addEventListenerAll('.delete', 'click', function(event){
    const id = event.target.parentElement.getAttribute('data-id')
    deleteTopping(id)
    .then((response) => getToppings())
    .then((response) => renderToppings(response.data.toppings))
    .catch((error) => alert(error.response.statusText))
  })

  // show update form
  addEventListenerAll('.update', 'click', function(event){
    const id = event.target.parentElement.getAttribute('data-id')
    setEditing(id)
    getToppings()
    .then((response) => renderToppings(response.data.toppings))
  })

  // hide update form
  addEventListenerAll('.cancel', 'click', function(event){
    resetEditing()
    getToppings()
    .then((response) => renderToppings(response.data.toppings))
  })

  // update data
  addEventListenerAll('li > form', 'submit', function(event){
    event.preventDefault()

    const id = event.target.parentElement.getAttribute('data-id')
    const name = event.target.toppingName.value
    const deliciousness = parseInt(event.target.deliciousness.value)

    updateTopping(id, name, deliciousness)
    .then((response) => {
      resetEditing()
      return getToppings()
    })
    .then((response) => {
      renderToppings(response.data.toppings)
    })
    .catch((error) => alert(error.response.statusText))

  })

}

const toppingTemplate = ({ id, name, deliciousness }) =>
  `<li data-id="${id}">
    <button class="delete">Delete</button>
    <button class="update">Update</button>
    ${name} - ${getDeliciousnessDescriptor(deliciousness)}
  </li>`

const toppingEditingTemplate = ({ id, name, deliciousness }) =>
  `<li data-id="${id}">
    <button class="cancel">Cancel</button>
    <form style="display:inline">
      <input type="submit">Update</button>
      Name: <input name="toppingName" type="text" value="${name}" required/>
      Deliciousness: <input name="deliciousness" type="number" value="${deliciousness}" required/>
    <form>
  </li>`


const getDeliciousnessDescriptor = numb => {
  switch(numb){
    case 0:
    case 1:
    case 2:
      return 'Belch'
    case 3:
    case 4:
    case 5:
      return 'Passable'
    case 6:
    case 7:
    case 8:
      return 'Not Bad'
    case 9:
    case 10:
      return 'Heavenly'
    default:
      return 'I don\'t know what you are talking about'
  }
}


module.exports = { renderToppings }
