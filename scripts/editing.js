let editing = null

const setEditing = id => editing = id

const getEditing = () => editing

const resetEditing = () => editing = null

module.exports = {
  setEditing,
  getEditing,
  resetEditing
}
