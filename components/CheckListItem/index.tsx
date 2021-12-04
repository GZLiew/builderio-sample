import { ICON_MAP } from '@components/Icons/utils'

export type CheckListItemProps = {
  label: string
  icon?: keyof typeof ICON_MAP
  className?: string
}

const CheckListItem = (props: CheckListItemProps) => {
  const { label, className = '', icon = 'check' } = props
  const IconComp = ICON_MAP[icon] || (() => null)
  return (
    <div className={`flex flex-row justify-start items-center ${className}`}>
      <IconComp className="mr-4" />
      <div className="text-white">{label}</div>
    </div>
  )
}

export default CheckListItem
