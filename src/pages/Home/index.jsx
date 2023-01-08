import Header from "../../components/Header"
import BannerHome from "../../components/Banner/bannerHome"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import image from '../../assets/img/banner-home.jpg'


function Home() {

  const slogan = "Chez vous, partout et ailleurs"

  return (
    <>
      <Header/>
      <BannerHome image={image} title={slogan}/>
      <Card/>
      <Footer/>
    </>
  )
}

export default Home
