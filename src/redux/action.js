import { 
    DECREMENT, 
    INCREMENT, 
    ADD_COMMENTS ,
    DELETE_COMMENT
} from "./types"

export const icrement = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const addComments = (input, id) => {
    return {
        type: ADD_COMMENTS,
        payload: {input, id}
    }
}

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: {id}
    }
}