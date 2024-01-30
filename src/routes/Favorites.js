import styled from 'styled-components'
import { useEffect, useState } from 'react'
import bookImg from '../images/livro.png'
import { deleteFavorite, getFavorites } from '../services/favorites'

const FavoritesContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`;

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;

    p {
        width: 200px;
        color: #FFF;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`;

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([])

  const fetchFavorites = async () => {
    const booksFavorites = await getFavorites()
    setFavorites(booksFavorites)
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  function handleClickResult(id) {
    deleteFavorite(id)
    fetchFavorites()
    alert(`livro de id:${id} removido dos favoritos`)
  }

  return (
    <FavoritesContainer>
      <Title>Aqui estão seus livros favoritos:</Title>
      <ResultContainer>
        {favorites.length ?
          favorites.map(favorite => (
            <Result onClick={() => handleClickResult(favorite.id)}>
              <img src={bookImg} />
              <p>{favorite.name}</p>
            </Result>)) : null
        }
      </ResultContainer>
    </FavoritesContainer>
  );
}

export default Favorites
