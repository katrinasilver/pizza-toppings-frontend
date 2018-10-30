const addEventListenerOnSelector = (selector, type, fn) => {
  const targets = document.querySelectorAll(selector)

  targets.forEach(t => t.addEventListener(type, fn))
}

module.exports = {
  addEventListenerOnSelector
}