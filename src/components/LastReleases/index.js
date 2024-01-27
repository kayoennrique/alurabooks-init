import { books } from './dataLatestReleases';
import { Title } from '../Title';
import CardRecommend from '../CardRecommend';
import bookImage from '../../images/livro2.png';
import styled from 'styled-components';

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title
                color="#EB9B00"
                sizeFont="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} />
                ))}
            </NewBooksContainer>
            <CardRecommend
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={bookImage}
            />
        </LastReleasesContainer>
    );
}

export default LastReleases;