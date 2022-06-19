import axios from "axios";

// ACTION TYPES
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

export const SET_LIST_ITEMS = "SET_LIST_ITEMS";
export const GET_LIST_BY_ID = "GET_LIST_BY_ID";
export const SET_LIST_TITLE = "SET_LIST_TITLE";

export const CREATE_LIST = "CREATE_LIST";

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

export const setNewList = (value) => ({
  type: CREATE_LIST,
  payload: value,
});

const baseUrl = "http://localhost:3050";

// THUNK ACTION CREATORS
export const getLists = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/lists`);
  dispatch(setListItems(response.data));
};

export const getListById = (id) => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/lists/${id}`);
  dispatch(setListById(response.data));
};

export const updateListTitle = (id, title) => async (dispatch) => {
  const data = { id, title };
  await axios.put(`${baseUrl}/lists/`, data);
  // call to re 'get' data
  dispatch(getListById(id));
};

export const createList = () => async (dispatch) => {
  // I'm not sure this needs to be an action creator, as it does not directly influence state
  // it simply makes a network request and returns a response
  const response = await axios.post(`${baseUrl}/lists`);
  return response.data;
};
