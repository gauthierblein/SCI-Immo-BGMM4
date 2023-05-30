import Header from "../../components/Header"
import Banner from "../../components/Banner/banner"
import Footer from "../../components/Footer"
import image from '../../assets/img/banniere.png'
import SellGallery from "../../components/Gallery/sellGallery"
import Switch from "../../components/Switch/switch"
import './home.css'


function Home() {
  const slogan = ""

  return (
    <>
      <Header/>
      <Banner image={image} title={slogan}/>
      <div className="titleHome">Nos biens disponibles</div>
      <SellGallery/>
      <Footer/>
      
    </>
  )
}

export default Home
