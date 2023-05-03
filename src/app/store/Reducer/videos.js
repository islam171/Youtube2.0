const defaultState = {
    videos: [],
    isLoaded: false
  }
  
  const videos = (state = defaultState, action) => {
    switch (action.type) {
      case "SET_VIDEOS":
        return {...state, videos: action.payload}
      case "LOADED_VIDEO":
        return {...state, isLoaded: true}
      default:
        return state
    }
  }



  export default videos