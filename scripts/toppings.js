const shortId = require('short-id')

const toppings = [
  {
    id: shortId.generate(),
    name: 'Cheese',
    deliciousness: 10
  },
  {
    id: shortId.generate(),
    name: 'Pepperoni',
    deliciousness: 9
  },
  {
    id: shortId.generate(),
    name: 'Anchovies',
    deliciousness: 3
  },
  {
    id: shortId.generate(),
    name: 'Pineapple',
    deliciousness: 10
  },
  {
    id: shortId.generate(),
    name: 'Mushroom',
    deliciousness: 8
  },
  {
    id: shortId.generate(),
    name: 'Kalamata Olives',
    deliciousness: 8
  }
]

const getToppings = () => {
  return toppings
}

const addTopping = (name, deliciousness) => {
  const topping = {
    id: shortId.generate(),
    name,
    deliciousness: parseInt(deliciousness)
  }

  toppings.push(topping)
}

const deleteTopping = id => {
  const topping = toppings.find(e => e.id === id)

  const idx = toppings.indexOf(topping)

  if(idx !== -1)
    toppings.splice(idx, 1)
}

const updateTopping = (id, name, deliciousness) => {
  const topping = toppings.find(e => e.id === id)

  if(topping){
    topping.name = name
    topping.deliciousness = deliciousness
  }
}

module.exports = {
  getToppings,
  addTopping,
  deleteTopping,
  updateTopping
}