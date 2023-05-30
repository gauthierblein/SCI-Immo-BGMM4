import './footer.css'
import { BsHouseFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const effectiveYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-logo">
        <BsHouseFill size={30} />
        Tiny&Trendy Immo
      </div>
      <div className='footer-contact'>
        <a href="mailto:sci.cgmn4@gmail.com"><HiOutlineMail size={30}/>tinytrendy@immo.fr</a>
      </div>
      <p className="footer__text">
        &copy; {effectiveYear} Tiny&Trendy Immo Gestion immobilière. Tous droits réservés
      </p>
    </footer>
  )
}

export default Footer
