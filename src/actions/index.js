export const increment = (val) => {
  return {
    type: 'INCREMENT',
    payload: val
  }
}
export const decrement = (val) => {
  return {
    type: 'DECREMENT',
    payload: val
  }
}

export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}