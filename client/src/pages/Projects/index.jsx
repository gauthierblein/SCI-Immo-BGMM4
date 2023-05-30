import Header from "../../components/Header"
import Banner from '../../components/Banner/banner'
import Collapse from '../../components/Collapse'
import Footer from "../../components/Footer"
import image from '../../assets/img/banniere.png'

import './projects.css'

const projectsInformations = [
  {
    title: 'Nouvelles acquisitions',
    body: 'Nous sommes à la recherche de nouveaux logements, afin de poursuivre le développement de l entreprise en France tout en diversifiant l offre en logements. Nous souhaitons rester fidèles à nos valeurs, en proposant des biens de qualité à la location, tout en garantissant un niveau de rentabilité satisfaisant pour les investisseurs.',
  },
  {
    title: 'Rénovations',
    body: 'Nous prévoyons de moderniser certains équipements d isolation thermique dans nos logements, afin de répondre aux exigences environnementales à venir.',
  },
  {
    title: 'Levée de fonds',
    body: "La société souhaite s'ouvrir à de nouveaux investisseurs, le but étant d'augmenter la force de levier de BGMM4 pour financer l'aquisition de nouveaux biens et la modernisation des logements.",
  },
  {
    title: 'Collaboration',
    body: "Nous sommes ouverts pour partager notre expérience et nos compétences avec d'autres SCI et SCPI.",
  },
]

  function Projects () {
    return (
    <div>
      <Header/>
      <Banner image={image}/>
      <div className="projects-container">
        {projectsInformations.map((info, index) => {
          return <Collapse props={info.body} title={info.title} key={index} />
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Projects
