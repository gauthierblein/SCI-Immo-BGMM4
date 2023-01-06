import { useState } from 'react'
import './collapse.css'
import chevron from '../../assets/img/Chevron.png'



function Collapse ({ props, title }) {
    const [toggle, setToggle] = useState(false)
    function toggleState () {setToggle(!toggle)}

    return (
        <>
          <div className='dropdown-header' onClick={toggleState}>
              <h2 className="dropdown-title">{title}</h2>
              <img    className={toggle ? 'chevron-ouvert' : 'chevron'}
                      src={chevron}
                      alt="icone de chevron"
              />
          </div>
            <div className={toggle ? 
              'dropdown-text dropdown-text-open'
            : 'dropdown-text dropdown-text-close'}>
              {title === 'Equipements' ? (
                <ul>
                  {props.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              ) : ( <p>{props}</p>)
              }
            </div>      
        </>
    )
}

export default Collapse