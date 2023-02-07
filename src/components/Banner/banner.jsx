import './banner.css'

function BannerHome ({ image, title }) {
    return (
        <div className="bannerHome__container">
          <img src={image} alt="" className="bannerHome__img" />
        </div>
      
    )
  }
  
  export default BannerHome
  