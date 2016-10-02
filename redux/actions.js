let actions = {
  // an action creator
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  }
}

export default actions