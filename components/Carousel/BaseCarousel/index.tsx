import MultiCarouselComp, { CarouselProps } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { LeftArrow, RightArrow } from '@components/Carousel'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
}

const BaseCarousel = (props: Partial<CarouselProps>) => {
  const { children, ...carouselProps } = props
  return (
    <MultiCarouselComp
      responsive={responsive}
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      {...carouselProps}
    >
      {children}
    </MultiCarouselComp>
  )
}

export default BaseCarousel
