import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';

// initial state
const initialState = {
  favlist: localStorage.getItem('favlist')
    ? JSON.parse(localStorage.getItem('favlist'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favlist', JSON.stringify(state.favlist))
  }, [state]);

  // actions
  const addArticleToFavList = article => {
    dispatch({type: "ADD_ARTICLE_TO_FAVLIST", payload: article })
  };

  const removeArticleFromFavList = (id) => {
    dispatch({type: "REMOVE_ARTICLE_FROM_FAVLIST", payload: id })
  };

  return (
    <GlobalContext.Provider value={{ favlist: state.favlist,  addArticleToFavList, removeArticleFromFavList }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
