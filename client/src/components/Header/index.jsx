import { Link } from 'react-router-dom'
import './header.css'
import { BsHouseFill } from "react-icons/bs";

function Header() {
  return (
    <header >

      <Link className="header__logo" to="/">
        <BsHouseFill size={30} /><p className='logoText'>Tiny&Trendy Immo</p>
      </Link>
      <nav>
        <Link className="header__link-btn" to="/login">S'identifier</Link>
        <Link className="header__link-btn" to="/signup">Créer un compte</Link>
        <Link className="header__link" to="/">Accueil</Link>
        <Link className="header__link" to="/projects">Projets</Link>
        <Link className="header__link" to="/about">A Propos</Link>
      </nav>

    </header>
  )
}

export default Header
