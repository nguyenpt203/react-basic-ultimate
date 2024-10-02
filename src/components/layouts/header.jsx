import './header.css';
const Header = () => {
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/users">User</a></li>
            <li><a href="/books">Books</a></li>
        </ul>
    )
}

export default Header;