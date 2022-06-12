import { INCREMENT, DECREMENT, SET } from "./actions";

import { initialState } from "./store";

export const countReducer = (counter = initialState.counter, action) => {
  if (action.type === INCREMENT) {
    return { count: counter.count + 1 };
  }

  if (action.type === DECREMENT) {
    return { count: counter.count - 1 };
  }

  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }

  return counter;
};
