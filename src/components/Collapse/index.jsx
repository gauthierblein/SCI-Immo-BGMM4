import { useState } from 'react'
import './collapse.css'
import chevron from '../../assets/img/Chevron.png'

const aboutInformations = [
    {
      title: 'Fiabilité',
      body: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      body: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      body: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      body: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lm'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

function Collapse() {
    const [toggle, setToggle] = useState(false)
    const toggleState = () => {setToggle(!toggle)
      }

    return (
        <div className='dropdown-wrapper' onClick={toggleState}>
            {aboutInformations.map((info, index) => (
              <>
                <div className='dropdown-header' key={`${info.title}-${index}`}>
                    <h2 className="dropdown-title">{info.title}</h2>
                    <img    className={toggle ? 'chevron-ouvert' : 'chevron'}
                        src={chevron}
                        alt="icone de chevron"
                     />
                </div>
                <div className='dropdown-description'>
                  {toggle? <p className='description'>{info.body} </p> : null}
                </div>
              </>

              
            ))}
            
        </div>
    )
}

export default Collapse