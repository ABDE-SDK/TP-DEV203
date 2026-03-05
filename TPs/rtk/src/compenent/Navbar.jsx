import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/comments'>Comments</Link>
        </nav>

    )
};

export default Navbar;