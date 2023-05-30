import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import './createArticle.css'


export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const params = useParams()
    const user = params.id
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user,
      title,
      description,
      price,
      location,
      category
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.cover = filename;
      try {
        await axios.post('http://localhost:4000/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('http://localhost:4000/posts', newPost);
      alert("nouvelle annonce postée")
      navigate(`/dashboard/${user}`);
    } catch (err) {}
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>

          <label htmlFor="fileInput"></label>
          <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])}/>
          <input  type="text"
                  placeholder="Titre"
                  autoFocus={true}
                  onChange={e=>setTitle(e.target.value)}
          />
          <input  type="text"
                  placeholder="Description"
                  autoFocus={true}
                  onChange={e=>setDescription(e.target.value)}
          />
          <input  type="text"
                  placeholder="Prix"
                  autoFocus={true}
                  onChange={e=>setPrice(e.target.value)}
          />

          <input  type="text"
                  placeholder="Localité"
                  autoFocus={true}
                  onChange={e=>setLocation(e.target.value)}
          />
          <input  type="text"
                  placeholder="Vente ou Location"
                  autoFocus={true}
                  onChange={e=>setCategory(e.target.value)}
          />

          <button className="writeSubmit" type="submit">Publier</button>
      </form>
    </div>
  );
}
  
