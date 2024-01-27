import './styles.css';
import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';

const icons = [profile, bag];

function HeaderIcons() {
    return (
        <ul className='icons'>
            { icons.map( (icon) => (
              <li className='icon'><img src={icon}></img></li>
            )) }
        </ul>
    );
}

export default HeaderIcons;