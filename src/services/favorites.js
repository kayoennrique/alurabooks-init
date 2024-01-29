import axios from "axios"

const favoritesAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" })

async function getFavorites() {
  const response = await favoritesAPI.get('/')

  return response.data

}

export {
  getFavorites
}