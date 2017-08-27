import axios from 'axios';

export const FETCH_POSTS = 'fetch_post';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=h4zl0alfredolandanesco';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: CREATE_POST,
        payload: request
    }
}