import React from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import '@/styles/homestayCarousel.css'
import Autoplay from 'embla-carousel-autoplay'
// import '@/styles/base.module.css'
type PropType = {
  images : string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { images, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({delay : 3000, stopOnInteraction : false, stopOnMouseEnter : true})])


  return (
    <section className="embla_2">
      <div className="embla__viewport_2" ref={emblaRef}>
        <div className="embla__container_2">
          {images.map((x) => (
            <div className="embla__slide_2" key={x}>
                <img className="embla__slide__image" src={x}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
