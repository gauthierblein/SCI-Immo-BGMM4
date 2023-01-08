import './bannerHome.css'

function BannerHome ({ image, title }) {
    return (
        <div className="bannerHome__container">
          <img src={image} alt="" className="bannerHome__img" />
          <div className="bannerHome__overlay"></div>
          <h2 className="bannerHome__title">{title}</h2>
        </div>
      
    )
  }
  
  export default BannerHome
  