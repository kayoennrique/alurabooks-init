import './styles.css';
import logo from '../../images/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img
                className='logo-img'
                src={logo}
                alt="Logo da AluraBooks"
            />
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;