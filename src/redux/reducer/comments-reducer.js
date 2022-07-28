import { ADD_COMMENTS } from "../types";

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
        default: 
            return state
    }
}