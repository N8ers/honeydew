import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { countReducer } from "./countReducer";
import { listReducer } from "./listReducer";
import { selectedListReducer } from "./selectedListReducer";

export const initialState = {
  // user: {
  //   username: "N8ers",
  //   email: "____",
  // },
  // friends: [
  //   { id: 1, username: "Goon" },
  //   { id: 2, username: "Tsuki" },
  // ],
  selectedList: {
    title: "",
    tasks: [],
  },
  lists: [],
  counter: {
    count: 11,
  },
};

// multi reducer concept
// const initialState = {
//   users: [],
//   tasks: [],
// };
// const userReducer = (users = initialState.users, action) => {
//   if (action.type === "ADD_USER") {
//     return [...users, action.payload];
//   }
// };
// const taskReducer = (tasks = initialState.tasks, action) => {
//   if (action.type === "ADD_TASK") {
//     return [...tasks, action.payload];
//   }
// };
// const reducer = combineReducers({
//   users: userReducer, // user part of state tree, use userReducer
//   tasks: taskReducer, // task part of start tree, use taskReducer
// });

const reducer = combineReducers({
  counter: countReducer,
  lists: listReducer,
  selectedList: selectedListReducer,
});

const middleware = applyMiddleware(thunk);

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, compose(middleware, enhancer));
