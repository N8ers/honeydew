import { SET_LOADING } from "./actions"
import { initialState } from "./store"

export const loadingReducer = (loading = initialState.loading, action) => {
  if (action.type === SET_LOADING) {
    return action.payload
  }
  return loading
}
