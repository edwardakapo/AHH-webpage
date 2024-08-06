import React, { useEffect, useState } from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import '@/styles/testimonialCarousel.css'
// import '@/styles/base.module.css'
interface Testimonial  {
    img : string;
    quote : string;
    name : string;
}
type PropType = {
  testimonials : Testimonial[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { testimonials, options } = props
  const  [plugins, setPlugins] = useState<any[]>([]);

  const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<T>) => {
      const later = () => {
        if (timeout) {
          clearTimeout(timeout);
        }
        func(...args);
      };
  
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setPlugins([])
      }
      else {
        setPlugins([Fade()])
      }
    }

    handleResize();

    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize',debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };

  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className=" embla__button__container">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((x) => (
              <div className="embla__slide" key={x.img}>
                  <div className="embla__slide__quote">
                      <div className="flex mobile-md:flex-col mobile-md:gap-y-10 w-fit gap-x-12 items-center">
                          <img className="w-[300px] desktop:w-[350px] h-fit rounded-xl mobile-md:w-[350px] mobile-md:h-[400px] object-cover object-top" src={x.img} alt="image of a woman holding up her baby"/>
                          <div id="quote" className="w-[250px] mobile-md:w-[300px] h-fit flex flex-col gap-y-5">
                              <div>
                                  <svg className="pb-5" width="60" fill="#3B4323" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path></g>
                                  </svg>
                                  <p className="text-lg font-NotoSans font-normal"> {x.quote} </p> 
                              </div>
                              <p className='text-xl font-NotoSans font-semibold text-button'>{x.name}</p>     
                          </div> 
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
