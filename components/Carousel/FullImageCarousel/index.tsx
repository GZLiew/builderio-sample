import { BaseCarousel } from '@components/Carousel'
import ExlusiveFrame from '@assets/images/frame.png'

type Image = {
  src: string
  alt: string
  exclusive?: boolean
}

type FullImageCarouselProps = {
  images: Image[]
}

const FullImageCarousel = (props: FullImageCarouselProps) => {
  const { images = [] } = props
  return (
    <BaseCarousel arrows containerClass="max-w-full">
      {images.map((image) => (
        <div className="w-full h-full relative">
          <img
            src={image.src}
            alt={image.alt || 'sample test'}
            className="w-full h-full"
          />
          <img
            className={`absolute top-0 right-0 ${
              image.exclusive ? 'block' : 'hidden'
            }`}
            src={ExlusiveFrame.src}
          />
        </div>
      ))}
    </BaseCarousel>
  )
}

export default FullImageCarousel
