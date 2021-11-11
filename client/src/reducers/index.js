import { combineReducers } from "redux";

import blogPostsReducer from './blog-posts';

export const rootReducer = combineReducers({
    blogPostsReducer
});
export default rootReducer;