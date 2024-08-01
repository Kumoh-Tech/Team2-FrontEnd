import { useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams()

    return (
        <div>
            {id}번 게시글
        </div>
    )
}

export default Post