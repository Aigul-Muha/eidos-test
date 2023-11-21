import axios from 'axios';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const response = await axios.get('https://655b9fe4ab37729791a966cf.mockapi.io/data', {
        params: {
          limit,
          page,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
