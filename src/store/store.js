import { createStore, combineReducers } from "redux";

import { countReducer } from "./countReducer";

export const initialState = {
  // taskLists: [
  //   { id: 1, title: "Grocery List" },
  //   { id: 2, title: "Tricks to teach Tsuki" },
  //   { id: 3, title: "Weekend Chores" },
  // ],
  // selectedTaskList: {
  //   id: 1,
  //   title: "Grocery List",
  //   tasks: [
  //     { id: 1, complete: false, title: "throw rocks" },
  //     { id: 2, complete: false, title: "eat socks" },
  //     { id: 3, complete: false, title: "shake blocks" },
  //   ],
  //   invitedFriends: [{ id: 1, username: "Goon" }],
  // },
  // user: {
  //   username: "N8ers",
  //   email: "____",
  // },
  // friends: [
  //   { id: 1, username: "Goon" },
  //   { id: 2, username: "Tsuki" },
  // ],
  counter: {
    count: 11,
  },
};

const reducer = combineReducers({
  counter: countReducer,
});

export const store = createStore(reducer);
