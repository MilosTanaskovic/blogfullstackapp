import * as api from '../api'

export const getBlogPostAction =  () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogPosts();

        dispatch({
            type: 'FETCH_ALL_BLOGS',
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}