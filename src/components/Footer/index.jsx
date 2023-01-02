import './footer.css'
import footerLogo from '../../assets/img/LOGO_white.png'

function Footer() {
  return (
    <footer className="footer">
      <img alt="footer_logo" src={footerLogo} className="logo"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
