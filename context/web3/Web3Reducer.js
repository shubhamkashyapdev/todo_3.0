import { LOAD_WEB3_FAILED, LOAD_WEB3_SUCCESS } from "./Web3Types"

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_WEB3_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      }
    case LOAD_WEB3_FAILED:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
