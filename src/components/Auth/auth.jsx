import './auth.css'
import users from '../../users.json'
import { useRef } from 'react'

function Auth () {
    const userList = Object.values(users)
    const user = useRef ()
    const password = useRef ()
    const handleClick = () => {
        const userLog = user.current.value
        const userPass = password.current.value
        const userFind = userList.find((userList) => userList.username === userLog && userList.password === userPass) ;
        if (userFind) {
            console.log ("test")
            window.location.href = 'http://localhost:3000/dashboard/'
        }
        else {
           alert("Authentification échouée")
        }
    }
     

    return (
        <div className="auth__container">
            <form>
                <input type="text" name="user" placeholder="Identifiant" ref={user}/>
                <input type="text" name="password" placeholder="Mot de passe" ref={password}/>
            </form>
            <div className='btn-container'>
                <button onClick={handleClick}>Connection</button>
            </div>
        </div>
    )
  }
  
  export default Auth
  