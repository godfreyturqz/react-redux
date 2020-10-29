export const usernameReducer = (state = '', action) => {
    switch(action.type){
        case 'USERNAME':
            return state = action.payload
        default:
            return state
    }
}

export const passwordReducer = (state = '', action) => {
    switch(action.type){
        case 'PASSWORD':
            return state = action.payload
        default:
            return state
    }
}
