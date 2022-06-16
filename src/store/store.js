import { createStore, combineReducers } from "redux";

import { countReducer } from "./countReducer";

export const initialState = {
  // taskLists: [
  //   { id: 1, title: "Grocery List", tasks: [], invitedFriends: [{ id: 1, username: 'Goon }] },
  //   { id: 2, title: "Tricks to teach Tsuki", tasks: [], invitedFriends: [] },
  //   { id: 3, title: "Weekend Chores", tasks: [], invitedFriends: [] },
  // ],
  // selectedTaskList: {
  //   id: 1,
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
