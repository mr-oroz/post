const CommentsComponent = () => {
    return (
        <div className="card-comments">
            <form className="comments-item" action="">
                <input placeholder="comment" type="text" />
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default CommentsComponent;