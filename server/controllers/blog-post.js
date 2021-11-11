import BlogPostModel from '../data-models/blogpostModel.js';

export const getBlogPosts = async (req, res) => {
    try {
        const blogPostData = await BlogPostModel.find();

        res 
            .status(200)
            .json(blogPostData);
    } catch (error) {
        res
            .status(404)
            .json({message: error.message});
    }
};

export const postBlogPost = async (req, res) => {
    const blogPostBody = req.body;
    const newBlogPost = new BlogPostModel(blogPostBody);
    try {
        await newBlogPost.save();
        res
            .status(201)
            .json(newBlogPost);
    } catch (error) {
        res
            .status(409)
            .json({message: error.message});
    }
};