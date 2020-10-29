export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number ? number : 1
  }
}

export const decrement = (number) => {
  return {
    type: 'DECREMENT',
    payload: number ? number : 1
  }
}

export const login = () => {
  return {
    type: 'LOGIN'
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const handleUsername = (value) => {
  return {
    type: 'USERNAME',
    payload: value
  }
}

export const handlePassword = (value) => {
  return {
    type: 'PASSWORD',
    payload: value
  }
}