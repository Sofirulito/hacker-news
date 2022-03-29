// eslint-disable-next-line import/no-anonymous-default-export
export default(state, action) => {
  switch(action.type){
    case "ADD_ARTICLE_TO_FAVLIST":
      return {
        ...state,
        favlist: [action.payload, ...state.favlist]
      };
    case "REMOVE_ARTICLE_FROM_FAVLIST":
      return {
        ...state,
        favlist: state.favlist.filter(fav => fav.objectID !== action.payload)
      }
    default:
      return state;
  }
}
