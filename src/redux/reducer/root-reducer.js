import { combineReducers } from "redux"
import { LikeReducer } from './like-reducer';
import { CommentsReducer } from './comments-reducer';

export const rootReducer = combineReducers({
    LikeReducer,
    CommentsReducer,
})