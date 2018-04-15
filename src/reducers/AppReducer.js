import * as AppActions from '../actions/AppActions'

export const initialState = {
  val: 'foo'
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.CHANGE_VAL:
      return {
        ...state,
        val: action.payload.newVal
      }
    default:
      return state
  }
}
