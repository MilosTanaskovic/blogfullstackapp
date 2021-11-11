import axios from 'axios';

const api_url = 'http://localhost:5000/milos-blog';

export const fetchBlogPosts = () => axios.get(api_url);