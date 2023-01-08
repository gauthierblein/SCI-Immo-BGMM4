import './footer.css'
import footerLogo from '../../assets/img/LOGO_white.png'

function Footer() {
  const effectiveYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <img alt="footer_logo" src={footerLogo} className="logo"></img>
      <p className="footer__text">
        &copy; {effectiveYear} Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer
