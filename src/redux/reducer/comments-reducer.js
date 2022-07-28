import { ADD_COMMENTS, DELETE_COMMENT } from "../types";

const initialState = {
    comments: []
}

export const CommentsReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_COMMENTS: 
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case DELETE_COMMENT: 
            const {id} = action.payload
            const newArr = state.comments.filter(elem => elem.id !== id);
            return {
                ...state,
                comments: newArr
            }
        default: 
            return state
    }
}