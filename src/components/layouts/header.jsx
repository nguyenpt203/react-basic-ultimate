import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <ul>
            <li><Link className="active" to={'/'}>Home</Link></li>
            <li><Link to={'/users'}>User</Link></li>
            <li><Link to={'/books'}>Books</Link></li>
        </ul >
    )
}

export default Header;