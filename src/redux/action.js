import { 
    DECREMENT, 
    INCREMENT, 
    ADD_COMMENTS ,
    DELETE_COMMENT,
    GET_POST_COMMENT,
    SHOW_LOADING,
    HIDE_LOADING,
    CLEAR_ERROR,
    SHOW_ERROR
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

export const addComments = (title, id) => {
    return {
        type: ADD_COMMENTS,
        payload: {title, id}
    }
}

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: {id}
    }
}

export const getPostComment = (data) => {
    return {
        type: GET_POST_COMMENT,
        payload: {data}
    }
}

export const showLoading = () => {
    return {
        type: SHOW_LOADING,
    }
}
export const hideLoading = () => {
    return {
        type: HIDE_LOADING,
    }
}
export const clearError= () => {
    return {
        type: CLEAR_ERROR,
    }
}
export const showError= (error) => {
    return {
        type: SHOW_ERROR,
        error
    }
}