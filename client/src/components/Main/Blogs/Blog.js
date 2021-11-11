import React from 'react';
import { useSelector } from 'react-redux';

export default function Blog() {
    const blogPosts = useSelector(state => state.blogPostsReducer);
    console.log(blogPosts);
    return (
        <div>
            <h2>Title</h2>
            <p>Date 4343434</p>
            <figure>
                {/* <img src="" alt="" style="width:100%" /> */}
                <img src='' />
                <figcaption>dfsdfsdfsdfdfdaf</figcaption>
            </figure>
            <button>Read more</button>
        </div>
    )
}