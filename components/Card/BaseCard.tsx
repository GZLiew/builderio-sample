export type BaseCardProps = {
  children: React.ReactNode
  variant: keyof typeof BG_VARIANT_MAP
}

const BG_VARIANT_MAP = {
  primary: 'bg-palette5',
  secondary: 'bg-palette3',
}

const BaseCard = (props: BaseCardProps) => {
  const { children, variant = 'primary' } = props
  const cardVariant = BG_VARIANT_MAP[variant]
  return (
    <div
      className={`${cardVariant} bg-opacity-70 rounded-md p-6 flex flex-col items-start text-white`}
    >
      {children}
    </div>
  )
}

export default BaseCard
