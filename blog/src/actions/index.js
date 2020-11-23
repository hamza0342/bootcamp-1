import JSONPlaceholder from '../apis/JSONPlaceholder';
export const fetchPosts = () => async dispatch => {

    
    const response = await JSONPlaceholder.get('/posts');
   dispatch({ type: 'FTECH_POSTS', payload: response.data})

};