import { useSelector, useDispatch } from 'react-redux';
import { icrement } from '../redux/action';
const LikeComponent = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    return <div className="button-controls">
        <button
            onClick={() => dispatch(icrement())}>
            ♥ {state.likes}
        </button>
        <button >👎</button>
    </div>
}

export default LikeComponent;