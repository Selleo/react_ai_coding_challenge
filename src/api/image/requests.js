import axios from '../axios'

export const fetchImages = () => axios.get('/images')

export const createImage = (data) => axios.post(`/images`, data)
