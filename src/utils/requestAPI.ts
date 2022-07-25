import axios from 'axios';

export const requestAPI = async (url: string, method: string, data?: any) => {
  const response = await axios({
    url,
    method,
    data,
  });
  return response.data;
}