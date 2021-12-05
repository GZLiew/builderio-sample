import { CaretLeft } from '@components/Icons'
import { ArrowProps } from 'react-multi-carousel'

const LeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="p-3 px-6 bg-gray-400 bg-opacity-70 rounded-md absolute left-0"
      onClick={() => onClick && onClick()}
    >
      <CaretLeft />
    </div>
  )
}

export default LeftArrow
