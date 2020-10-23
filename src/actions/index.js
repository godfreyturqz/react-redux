export const increment = (number) => {
    return {
      type: 'INCREMENT',
      payload: number ? number : 1
    }
}

export const decrement = () => {
    return {
      type: 'DECREMENT'
    }
}