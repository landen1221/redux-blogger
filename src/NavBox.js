import {Link} from 'react-router-dom'
import './CSS/NavBox.css'

const NavBox = () => {
    return (
        <div className="NavBox">
            <div className="contents">
                <h1>Microblog</h1>
                <p>Get in the Rithm of blogging!</p>
                <Link to="/">Blog</Link>
                <Link to="/new">Add new post</Link>
            </div>

        </div>
    )
}

export default NavBox