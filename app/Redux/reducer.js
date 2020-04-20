/**
 * reducer函数：根据旧的state和指定的action处理返回行的state
 */
import {INCREMENT, DECREMENT,  ISLOADING} from "./actionTypes";

const defaultState = {
  number: 0,
  isLoading: false
};

export default function count(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      state.number += action.number;
      return state;
    case DECREMENT:
      state.number -= action.number;
      return state;
    case ISLOADING:
      state.isLoading = action.value;
      return state;
    default:
      return state;
  }
}
