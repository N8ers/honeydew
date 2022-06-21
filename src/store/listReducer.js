import { SET_LIST_ITEMS } from "./actions"
import { initialState } from "./store"

export const listReducer = (lists = initialState.lists, action) => {
  if (action.type === SET_LIST_ITEMS) {
    return [...action.payload]
  }

  return lists
}
