import banner from '../../assets/img/banner.jpg'

function Banner() {
    return (
      <div className="banner">
        <img alt="banner" src={banner} className="banner__img"></img>
        <h1> Chez vous, partout et ailleurs </h1>
      </div>
      
    )
  }
  
  export default Banner
  