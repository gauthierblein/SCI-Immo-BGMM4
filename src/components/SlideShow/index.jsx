import { useState } from 'react'
import './slideShow.css'
import chevron from '../../assets/img/Chevron.png'


function SlideShow(current) {
    
    let [index, setIndex] = useState(0)
    const length = current.props.length;

    function sliderNext () {
        if (index === length - 1) {
          setIndex(0)
        } else {
          setIndex(index + 1)
        }
      }

      function sliderPrev () {
        if (index === 0) {
          setIndex(length - 1)
        } else {
          setIndex(index - 1)
        }
      }

    if (length === 1) {
    return (
        <div className='slideShow__container'>
            <img className='slider__img'src={current.props[index]} alt="imageSlider"/>

        </div>
    )} else {
    return (
        
            <div className='slideShow__container'>
                <img className='slider__img'src={current.props[index]} alt="imageSlider"/>
                <div className='chevronContainer'>
                    <img
                src={chevron}
                onClick={sliderPrev}
                className="chevronPrev"
                alt="chevron-previous"
                    />
                    <img
                src={chevron}
                onClick={sliderNext}
                className="chevronNext"
                alt="chevron-previous"
                    />
                </div>
            </div>
               
        )
    }
}

export default SlideShow