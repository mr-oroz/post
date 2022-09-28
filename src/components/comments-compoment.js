import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleCommentComponent from './single-comment-component';
import { addComments } from '../redux/action';
import uniqid from 'uniqid';
import { getPostComment, showLoading, hideLoading, showError, clearError } from "../redux/action";
import { getPost } from '../services/services'
import Loading from './loading';
const CommentsComponent = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const { comments, loading, error } = useSelector(state => state.CommentsReducer);
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(addComments(input, id))
        setInput('')
    }
    const loadPost = useCallback(async () => {
            dispatch(showLoading())
            dispatch(clearError())
            try {
                const data = await getPost()
                console.log(data)
                dispatch(getPostComment(data.data))
            } catch (e) {
                console.log(e)
                dispatch(showError('Ой что то не так!'))
            } finally {
                dispatch(hideLoading())
            }
    }, [getPost])

    useEffect(() => {
        loadPost()
    }, [])

    if (loading) {
        return <Loading />
    }
    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={loadPost}>повторить</button>
            </div>
        )
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
                comments.map((elem, index) => {
                    return <SingleCommentComponent key={elem.id} {...elem} />
                })
            }
        </div>
    )
}

export default CommentsComponent;