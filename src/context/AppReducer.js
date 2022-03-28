export default(state, action) => {
  switch(action.type){
    case "ADD_ARTICLE_TO_FAVLIST":
      return {
        ...state,
        favlist: [action.payload, ...state.favlist]
      }
    default:
      return state;
  }
}
