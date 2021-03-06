import axios from 'axios';
import {
  FETCH_POSTS
} from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=davidrhenley';

export const fetchPosts = () => async dispatch => {
  let { data } = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
  dispatch({ type: FETCH_POSTS, payload: data });
};
