import axios from "axios";

// ACTION TYPES
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

export const SET_LIST_ITEMS = "SET_LIST_ITEMS";
export const GET_LIST_BY_ID = "GET_LIST_BY_ID";
export const SET_LIST_TITLE = "SET_LIST_TITLE";

// ACTION CREATORS
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value) => ({ type: SET, payload: value });

export const setListItems = (value) => ({
  type: SET_LIST_ITEMS,
  payload: value,
});

export const setListById = (value) => ({
  type: GET_LIST_BY_ID,
  payload: value,
});

export const setListTitle = (value) => ({
  type: SET_LIST_TITLE,
  payload: value,
});

// THUNK ACTION CREATORS
export const getLists = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3050/lists");
  dispatch(setListItems(response.data));
};

export const getListById = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3050/lists/${id}`);
  dispatch(setListById(response.data));
};

export const updateListTitle = (id, title) => async (dispatch) => {
  const data = { id, title };
  await axios.put("http://localhost:3050/lists/", data);
  // call to re 'get' data
  dispatch(getListById(id));
};
