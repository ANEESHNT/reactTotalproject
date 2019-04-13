import type from '../../types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/Rice';
const {FETCH_POSTS} = type;

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload:posts
  }
};

export const RiceFetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
      let result = response.data

      dispatch(fetchPosts(result))
      })
      .catch(error => {
        throw(error);
      });
  };
};
