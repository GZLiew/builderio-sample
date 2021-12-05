import { FEATURE_ICON_MAP } from '@components/Icons/utils'

type FeatureProps = {
  icon: keyof typeof FEATURE_ICON_MAP
  title: string
  description: string
}

const Feature = (props: FeatureProps) => {
  const { icon, title, description } = props
  const IconComp = FEATURE_ICON_MAP[icon]
  return (
    <div className="flex flex-row justify-start items-start">
      <div className="mr-4">
        <IconComp className="w-11 h-11" />
      </div>
      <div className="flex flex-col pt-2">
        <div className="text-lg font-normal mb-3">{title}</div>
        <div className="text-sm font-light">{description}</div>
      </div>
    </div>
  )
}

export default Feature
