export const isLoggedReducer = (state = 'logged-out', action) => {
    switch(action.type){
        case 'LOGIN':
            return state = 'logged-in'
        case 'LOGOUT':
            return state = 'logged-out'
        default: return state
    }
}