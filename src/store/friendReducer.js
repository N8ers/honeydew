import { SET_FRIENDS } from "./actions"

import { initialState } from "./store"

export const friendReducer = (friends = initialState.friends, action) => {
  if (action.type === SET_FRIENDS) {
    return action.payload
  }

  return friends
}
