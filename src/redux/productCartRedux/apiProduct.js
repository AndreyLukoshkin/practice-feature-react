import axios from 'axios'
import { actionProductDetails } from './actionCartRedux'

export const fetchProductDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?id=${id}`
      )
      const data = await response.data
      dispatch(actionProductDetails(data))
    } catch (error) {
      console.error(`ERROR MESSAGE : ${error}`)
    }
  }
}
