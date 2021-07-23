import logo from '../assets/images/Logo2.png';
import './Header.css';

function Header() {
    return <div className="header">
        <img src={logo} className="logo" alt="logo" />
    </div>;
}

export default Header;
