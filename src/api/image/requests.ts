import axios from '../axios'

export const fetchImages = () => axios.get('/images')

interface ImageCreationData {
  url: string
  alt: string
}
export const createImage = (data: ImageCreationData) =>
  axios.post(`/images`, data)
