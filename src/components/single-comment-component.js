import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../redux/action';

const SingleCommentComponent = (props) => {
    console.log(props)
    const [comment, setComment] = useState('');
    const { title, id } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (title) {
            setComment(title)
        }
    }, [title])

    const deleteItem = () => {
        dispatch(deleteComment(id))
    }
    
    return (
        <div className='comments-item'>
            <div onClick={deleteItem} className='comments-item-delete'>x</div>
            <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                type="text" />
            <input type="submit" hidden />
        </div>
    )
}

export default SingleCommentComponent;