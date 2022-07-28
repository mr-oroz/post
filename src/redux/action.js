import { 
    DECREMENT, 
    INCREMENT, 
    ADD_COMMENTS 
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