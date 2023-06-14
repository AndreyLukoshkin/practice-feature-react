import { addManyCustomers } from '../redux/customerRedux/customerActions'
import axios from 'axios'

export const fetchCustomers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      const data = await response.data
      dispatch(addManyCustomers(data))
    } catch (error) {
      console.error(`ERROR MESSAGE : ${error}`)
    }
  }
}
