import './styles.css';
import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>
        </header>
    );
}

export default Header;