import { axios } from "./axios";


export const verifyTokenRequest = () => axios.get('/verifytoken');