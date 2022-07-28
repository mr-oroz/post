import { useEffect, useState } from 'react';

const SingleCommentComponent = (props) => {
    const [comment, setComment] = useState('');
    const { input } = props;
    useEffect(() => {
        if (input) {
            setComment(input)
        }
    }, [input])

    return (
        <div className='comments-item'>
            <div className='comments-item-delete'>x</div>
            <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                type="text" />
            <input type="submit" hidden />
        </div>
    )
}

export default SingleCommentComponent;