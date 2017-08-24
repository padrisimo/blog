import axios from 'axios';
import moduleName from 'module';

export const FETCH_POSTS = 'fetch_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=h4zl0alfredolandanesco';

export function fectchPost() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
