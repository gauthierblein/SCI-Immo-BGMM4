import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Switch from "../Switch/switch"
import './gallery.css'

export default function SellGallery() {
    const PF = "http://localhost:4000/uploads/";
    const [allPosts, setAllPosts] = useState(null);

    const [value, setValue] = useState(false);
  
    useEffect(() => {
        axios.get('http://localhost:4000').then((response) => {
              setAllPosts(response.data);
        });
        }, []);

    if (!allPosts) return ("pas d annonce créée");
    
      return (
        <div className='gallery-container'>
            <div className="searchZone">
                <Switch isOn={value} handleToggle={() => setValue(!value)} />
            </div>


            {allPosts.map((post) => {
                return <Link to={`/products/${post._id}`} key={post._id} className='gallery-link'>
                    
                    <img src={PF + post.cover} className="gallery-pic" alt='' />
                    <div className="thumb__overlay"></div>
                    <div className={`${post.category==="Vente" ? 'vente': 'location'}`}>{post.category}</div>
                    <div className='gallery-location'>
                        <p>{post.location}</p>
                    </div>
                    <div className='gallery-text'>
                        <p>{post.title}</p>
                        <h3>{post.price}</h3>
                    </div>
                </Link>
            })}
        </div>
    )
  }