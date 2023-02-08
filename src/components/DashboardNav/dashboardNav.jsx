import { Link } from 'react-router-dom'
import { BsHouseFill } from "react-icons/bs";
import './dashboardNav.css'

function DashboardNav() {
  return (
    <header >

      <div className="header__logo">
        <BsHouseFill size={30} /><p className='logoText'>BGMM4</p>
      </div>
      <nav>
        <a className="header__link" href="#agenda">Agenda</a>
        <Link className="header__link" to="/">Finances</Link>
        <Link className="header__link" to="/">Informations</Link>
        <Link className="header__link-btn" to="/">Fermer session</Link>
      </nav>

    </header>
  )
}

export default DashboardNav
