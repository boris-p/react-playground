export const CHANGE_VAL = 'CHANGE_VAL'

export function changeVal(newVal) {
  return {
    type: CHANGE_VAL,
    payload: {
      newVal: newVal
    }
  }
}
