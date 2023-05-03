const defaultState = {
    likes: 0,
    dislikes: 0,
  }
  
  const likes = (state = defaultState, action) => {
    switch (action.type) {
      case "LIKE_INC":
        return { ...state, likes: state.likes + Number(action.payload)}
      case "DISLIKE_DIC":
        return { ...state, dislikes: state.dislikes - Number(action.payload)}
      case "LIKE_DIC":
        return { ...state, likes: state.likes - Number(action.payload)}
      case "DISLIKE_INC":
        return { ...state, dislikes: state.dislikes + Number(action.payload)}

      default:
        return state
    }
  }



  export default likes