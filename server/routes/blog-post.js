import express from 'express';
import { getBlogPosts, postBlogPost } from '../controllers/blog-post.js'
const router = express.Router();

// get list of all Blog-Posts
router.get('/', getBlogPosts);
// ctreate a Blog-Post
router.get('/', postBlogPost);

export default router;
