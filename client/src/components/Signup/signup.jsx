import {useState} from "react";
import { useNavigate } from "react-router-dom";

import './signup.css'

export default function Auth() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();


   async function signup(ev) {
    ev.preventDefault();
    
    const sendUser = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'omit',
    });

    navigate("/");
    
   }

  
  return (
        <div className="signup__container">
            <form className="register" onSubmit={signup}>
            <h1>Créer un compte</h1>
            <input type="text"
                    placeholder="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}/>
            <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}/>
            <div className="btn-container"><button>Créer compte</button></div>
            </form>
        </div>

  );
}