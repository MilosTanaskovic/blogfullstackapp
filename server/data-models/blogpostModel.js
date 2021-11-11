import mongoose from 'mongoose';

const blogPostSchema = mongoose.Schema({
    title: String,
    content: String,
    file: String,
    hashTags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const BlogPostModel = mongoose.model('blogpostModel', blogPostSchema);

export default BlogPostModel;