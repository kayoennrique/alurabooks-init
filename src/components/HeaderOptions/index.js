import styled from 'styled-components';

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

const Options = styled.ul`
    display: flex;
`;

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function HeaderOptions() {
    return (
        <Options>
            {optionsText.map((text) => (
                <Option><p>{text}</p></Option>
            ))}
        </Options>
    );
}

export default HeaderOptions;