import CheckListItem from '@components/CheckListItem'
import BaseCard, { BaseCardProps } from '../BaseCard'

type Feature = {
  price: string
  description: string
}

type FeatureCardProps = BaseCardProps & {
  title: string
  locationLabel: string
  price: string
  features: Feature[]
}

const FeatureCard = (props: FeatureCardProps) => {
  const { variant, title, locationLabel, price, features = [] } = props
  return (
    <BaseCard variant={variant}>
      <div className="text-xl font-semibold mb-2">{title}</div>
      <CheckListItem icon="location" label={locationLabel} />
      <div className="my-8">
        <div className="text-5xl">{price}</div>
        <div className="text-base">TOTAL PRICE</div>
      </div>
      <div className="bg-palette1 bg-opacity-70 border-white border rounded-md flex flex-row w-full">
        {features.map((feature) => (
          <div className="flex flex-col justify-start p-2 border-r border-white w-full">
            <div className="text-base">{feature.price}</div>
            <div className="text-base">{feature.description}</div>
          </div>
        ))}
      </div>
    </BaseCard>
  )
}

export default FeatureCard
