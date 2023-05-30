import { Link } from 'react-router-dom'
import { BsHouseFill } from "react-icons/bs";
import { useParams } from 'react-router-dom'
import './dashboardNav.css'

function DashboardNav() {
  const params = useParams()
  const user = params.id
  console.log (user)
  return (
    <header >

      <div className="header__logo">
        <BsHouseFill size={30} /><p className='logoText'>BGMM4</p>
      </div>
      <nav>
        <Link className="header__link" to={`/dashboard/${user}/create`}>Créer annonce</Link>
        <Link className="header__link" to="/">Finances</Link>
        <Link className="header__link" to="/">Informations</Link>
        <Link className="header__link-btn" to="/">Fermer session</Link>
      </nav>

    </header>
  )
}

export default DashboardNav
