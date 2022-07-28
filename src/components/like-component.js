import { useSelector, useDispatch } from 'react-redux';
import { icrement, decrement } from '../redux/action';

const LikeComponent = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.LikeReducer.likes)
    return <div className="button-controls">
        <button
            onClick={() => dispatch(icrement())}>
            ♥ {state}
        </button>
        <button onClick={() => dispatch(decrement())}>👎</button>
    </div>
}

export default LikeComponent;