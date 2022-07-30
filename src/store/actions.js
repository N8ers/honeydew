import axios from "axios"

// ACTION TYPES
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const SET = "SET"

export const SET_LIST_ITEMS = "SET_LIST_ITEMS"
export const GET_LIST_BY_ID = "GET_LIST_BY_ID"
export const SET_LIST_TITLE = "SET_LIST_TITLE"

export const SET_USER = "SET_USER"

export const CREATE_LIST = "CREATE_LIST"

export const CREATE_LIST_ITEM = "CREATE_LIST_ITEM"

export const SET_LOADING = "SET_LOADING"

export const SET_FRIENDS = "SET_FRIENDS"

// ACTION CREATORS
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const set = (value) => ({ type: SET, payload: value })

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
})

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
})

export const setListItems = (value) => ({
  type: SET_LIST_ITEMS,
  payload: value,
})

export const setListById = (value) => ({
  type: GET_LIST_BY_ID,
  payload: value,
})

export const setListTitle = (value) => ({
  type: SET_LIST_TITLE,
  payload: value,
})

export const setNewList = (value) => ({
  type: CREATE_LIST,
  payload: value,
})

export const setNewListItem = (value) => ({
  type: CREATE_LIST_ITEM,
  payload: value,
})

export const setFriends = (value) => ({ type: SET_FRIENDS, payload: value })

const baseUrl = "http://localhost:3050"

// THUNK ACTION CREATORS
export const getLists = () => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const response = await axios.get(`${baseUrl}/lists`)
    await dispatch(setListItems(response.data))
  } catch (error) {
    console.log("ERROR ", error)
  }
  await dispatch(setLoading(false))
}

export const getListById = (id) => async (dispatch) => {
  await dispatch(setLoading(true))
  let response
  try {
    response = await axios.get(`${baseUrl}/lists/${id}`)
    dispatch(setListById(response.data))
  } catch (error) {
    console.log("error: ", error)
  }
  await dispatch(setLoading(false))

  return response
}

export const updateListTitle = (id, title) => async (dispatch) => {
  const data = { id, title }
  await axios.put(`${baseUrl}/lists/`, data)
  // call to re 'get' data
  dispatch(getListById(id))
}

export const createList = () => async () => {
  // I'm not sure this needs to be an action creator, as it does not directly influence state
  // it simply makes a network request and returns a response
  const response = await axios.post(`${baseUrl}/lists`)
  return response.data
}

export const createListItem = (data) => async (dispatch) => {
  const { listId } = data
  await axios.post(`${baseUrl}/listItem`, data)
  dispatch(getListById(listId))
}

export const updateListItem = (data) => async (dispatch) => {
  await axios.put(`${baseUrl}/listItem/${data.id}`, data)
  dispatch(getListById(data.listId))
}

export const updateInvitedFriends = (data) => async (dispatch) => {
  await axios.put(
    `${baseUrl}/listItem/${data.listId}/collaborators`,
    data.selectedCollaborators
  )
  dispatch(getListById(data.listId))
}

export const deleteListItem = (data) => async (dispatch) => {
  await axios.delete(`${baseUrl}/listItem/${data.id}`, { data })
  dispatch(getListById(data.listId))
}

export const getFriends = () => async (dispatch) => {
  await dispatch(setLoading(true))
  try {
    const result = await axios.get(`${baseUrl}/friends`)
    dispatch(setFriends(result.data))
  } catch (error) {
    console.log("ERROR ", error)
  }
  await dispatch(setLoading(false))
}
