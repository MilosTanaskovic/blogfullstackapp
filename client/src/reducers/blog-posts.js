export const blogPostsReducer = (blogPosts= [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BLOGS':
           return action.payload;
        case 'CREATE_BLOG':
            return blogPosts;
        default:
            return blogPosts;
    }
}
export default blogPostsReducer;
// export default (blogPosts= [], action) => {
//     switch (action.type) {
//         case 'FETCH_ALL_BLOGS':
//            return action.payload;
//         case 'CREATE_BLOG':
//             return blogPosts;
//         default:
//             return blogPosts;
//     }
// }