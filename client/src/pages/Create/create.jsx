import axios from 'axios'
import { useState, useEffect } from "react"

import DashboardNav from "../../components/DashboardNav/dashboardNav"
import Footer from "../../components/Footer"
import CreateArticle from '../../components/CreateArticle/createArticle.jsx'

import './create.css'


function Create() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000').then((response) => {
      setPosts(response.data);
    });
  }, []);

  
  if (!posts) return null;

  console.log(posts)
  return (
    <div>
      <DashboardNav />
      <CreateArticle />
 
      <Footer />      
    </div>   
  )



}

export default Create



