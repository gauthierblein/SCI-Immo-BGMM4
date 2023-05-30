import Header from "../../components/Header"
import Banner from '../../components/Banner/banner'
import Footer from "../../components/Footer"
import image from '../../assets/img/banniere.png'
import gbPic from '../../assets/img/gbPic.jpg'
import sbfPic from '../../assets/img/sbfPic.jpg'
import './about.css'


const team = [
  {
    picture: gbPic,
    nom: 'Gauthier B',
    body: 'Fondateur et gérant de la société en 2020.',
  },
  {
    picture: sbfPic,
    nom: 'Sam B F',
    body: 'Actionnaire et conseiller en investissement depuis 2022.',
  }
]

  function About () {
    return (
    <div>
      <Header/>
      <Banner image={image}/>
      <div className="about-container">
        <h2>L'équipe</h2>
        {team.map((teamInfos, index) => {
          return <div className="teamInfos" key={index}>
              <img src={teamInfos.picture} alt="" />
              <div classname="teamInfos-text">
                <h3>{teamInfos.nom}</h3>
                <p>{teamInfos.body}</p>
            </div>
          </div>
        })}

        <h2>Valeurs</h2>
          <p>La SCI BGMM4, fondée en 2020 à Cruseilles, en Haute-Savoie, souhaite permettre à ses actionnaires d'obtenir des revenus locatifs et un investissement sur le long terme</p>
          <br />
          <p>La société vise à proposer à la location des logements modernes, agréables et respectant les exigences environnementales</p>
      </div>
      <Footer/>
    </div>
  )
}

export default About
