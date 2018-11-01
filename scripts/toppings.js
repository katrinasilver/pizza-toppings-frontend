const axios = require('axios') // library for AJAX calls
const shortId = require('short-id')
const url = 'https://immense-lake-82822.herokuapp.com/toppings/'

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
  // return toppings

  // return toppings from the server
  return axios.get(url)
}

const addTopping = (name, deliciousness) => {
  // toppings.push(topping)
  let newTopping = { name, deliciousness } //abbreviated object syntax same as { name:name, deliciousness: deliciousness }
  return axios.post(url, newTopping)
}

const deleteTopping = id => {
  return axios.delete(url + id) // remove a topping based on id of topping
}

const updateTopping = (id, name, deliciousness) => {
  const topping = { name, deliciousness }
  return axios.put(url + id, topping)
}

module.exports = {
  getToppings,
  addTopping,
  deleteTopping,
  updateTopping
}
