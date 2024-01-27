import './styles.css';

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function HeaderOptions() {
    return (
        <ul className='options'>
            { optionsText.map( (text) => (
                <li className='option'><p>{text}</p></li>
            ) ) }
      </ul>
    );
}

export default HeaderOptions;