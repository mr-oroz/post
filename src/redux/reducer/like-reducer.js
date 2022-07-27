let initialState = {
    likes: 0,
}

export const LikeReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            // если равнается то тогда изменим состояние
            return {
                ...state,
                likes: state.likes + 1
            }
        default:
            // по умолчание 
            return state
    }
}