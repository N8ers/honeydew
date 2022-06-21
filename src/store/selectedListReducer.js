import { GET_LIST_BY_ID } from "./actions"
import { initialState } from "./store"

export const selectedListReducer = (
  selectedList = initialState.selectedList,
  action
) => {
  if (action.type === GET_LIST_BY_ID) {
    return action.payload
  }

  return selectedList
}
