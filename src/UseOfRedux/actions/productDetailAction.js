import type from '../../types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/ProductDetail';
const {FETCH_POSTS} = type;

export const fetchDetailPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload:posts
  }
};

export const fetchAllDetailPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
      let result = response.data

      dispatch(fetchDetailPosts(result))
      })
      .catch(error => {
        throw(error);
      });
  };
};
