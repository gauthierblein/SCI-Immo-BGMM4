import Header from "../../components/Header"
import Banner from "../../components/Banner/banner"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import image from '../../assets/img/banniere.png'
import './home.css'


function Home() {

  const slogan = ""

  return (
    <>
      <Header/>
      <Banner image={image} title={slogan}/>
      <div className="titleHome">Nos logements</div>
      <Card/>
      <Footer/>
    </>
  )
}

export default Home
