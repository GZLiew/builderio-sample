import { CaretRight } from '@components/Icons'
import { ArrowProps } from 'react-multi-carousel'

const RightArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="p-3 px-6 bg-gray-400 bg-opacity-70 rounded-md absolute right-0"
      onClick={() => onClick && onClick()}
    >
      <CaretRight />
    </div>
  )
}

export default RightArrow
