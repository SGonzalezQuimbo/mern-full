import { axios } from "./axios";

export const verifyToken = () => axios.get('/verifytoken');