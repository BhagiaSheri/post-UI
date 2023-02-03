import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className={"Header"}>
            <nav>
                <ul>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/new-post">Add Posts</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header