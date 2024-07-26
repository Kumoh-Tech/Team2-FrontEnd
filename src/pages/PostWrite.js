function PostWrite() {
    return (
        <form>
            <div>
                <label>제목</label>
                <input type="text" />
            </div>
            <div>
                <label>내용</label>
                <textarea></textarea>
            </div>
            <button type="submit">작성</button>
        </form>
    )
}

export default PostWrite;