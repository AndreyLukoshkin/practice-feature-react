import axios from 'axios'
import {
  actionProductDetails,
  actionProductDetailsFailure,
  actionProductDetailsRequest,
} from './actionCartRedux'

export const fetchProductDetails = (id) => {
  return async (dispatch) => {
    dispatch(actionProductDetailsRequest())
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?id=${id}`
      )
      const data = await response.data
      dispatch(actionProductDetails(data))
    } catch (error) {
      dispatch(actionProductDetailsFailure(error))
    }
  }
}
