import { createStore } from "redux";
import { LikeReducer } from './reducer/like-reducer';

const store = createStore(LikeReducer)

export default store;