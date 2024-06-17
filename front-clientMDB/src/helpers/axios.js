import axiosDefault from 'axios'

const URL_API = 'http://localhost:3001/api/users'

//export const registerRequest = async (user) => { await axios.post(`${URL_API}/register`, user)}

export const axios = axiosDefault.create({
    baseURL: 'http://localhost:3001/api/users',
    withCredentials: true,
  });