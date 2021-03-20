import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = { num: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state, num: state.num - 1 };
    case "increment":
      return { ...state, num: state.num + 1 };
    default:
    
      return state;
  }
};


export default reducer;
