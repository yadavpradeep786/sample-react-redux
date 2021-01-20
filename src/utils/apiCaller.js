import axios from "axios";
import { HOST_URL } from './configs'

const apiCaller = async (url, type = 'get') => {
  if (type === 'get') {
    return await axios.get(`${HOST_URL}${url}`)
  } else {
    // TODO block for post/put/delete api calls
    console.log(`It's a ${type} api call :(`);
  }
};
export default apiCaller;