import axios from "axios";

const favoritesAPI = axios.create({ baseURL: "http://localhost:8000/favorites" });

async function getFavorites() {
  const response = await favoritesAPI.get('/');

  return response.data;
}

async function postFavorite(id) {
  const response = await favoritesAPI.post(`/${id}`);

  return response.data;
}

async function deleteFavorite(id) {
  const response = await favoritesAPI.delete(`/${id}`);

  return response.data;
}

export {
  getFavorites,
  postFavorite,
  deleteFavorite
};