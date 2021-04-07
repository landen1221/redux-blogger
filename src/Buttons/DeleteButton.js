import {useHistory} from 'react-router-dom'

const DeleteButton = ({postID, blogs, setBlogs}) => {
    let history = useHistory()
    // can't yet see effect. Blog state is different on view pg and home page.
    const handleDelete = (id) => {
        const deleteBlog = blogs.filter(blog => blog.id !== id)
        console.log(deleteBlog)
        setBlogs(deleteBlog)
        history.push('/')
    }
    return (
        <button onClick={() => handleDelete(postID)}>Delete</button>
    )
}

export default DeleteButton