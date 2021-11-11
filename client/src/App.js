import React, { useEffect } from 'react';
import Nav from './components/Header/Nav';
import BlogName from './components/Header/BlogName';
import Home from './components/Main/Home';
import Form from './components/Main/Form';
import Footer from './components/Footer/Footer'
import './App.css';

import { useDispatch } from 'react-redux';
import { getBlogPostAction } from './actions/blog-posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPostAction());
  }, [dispatch])
  
  return (
    <div className="App">
     <Nav />
     <BlogName />
     <Home />
     <Form />
     <Footer />
    </div>
  );
}

export default App;
