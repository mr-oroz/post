import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleCommentComponent from './single-comment-component';
import {addComments} from '../redux/action';
import uniqid from 'uniqid';
const CommentsComponent = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const comments = useSelector(state => state.CommentsReducer.comments);
    console.log(comments)
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(addComments(input, id))
        setInput('')
    }
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item" action="">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="comment"
                    type="text" />
                <input type="submit" hidden />
            </form>
            {
                comments.map((elem, index) => (
                    <SingleCommentComponent key={elem.id} {...elem} />
                ))
            }
        </div>
    )
}

export default CommentsComponent;