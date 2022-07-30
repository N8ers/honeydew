import { SET_USER } from "./actions"
import { initialState } from "./store"

export const userReducer = (user = initialState.user, action) => {
  if (action.type === SET_USER) {
    let user = {
      email: action.payload.email,
      emailVerified: action.payload.emailVerified,
      uid: action.payload.uid,
    }
    return user
  }

  return user
}
