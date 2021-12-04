type ButtonProps = {
  children: string
  btnClass?: string
  size?: keyof typeof SIZE_MAP
  variant?: keyof typeof BG_VARIANT_MAP
  prepend?: React.ReactNode
  append?: React.ReactNode
}

const BG_VARIANT_MAP = {
  primary: 'bg-palette6',
  secondary: 'bg-palette3',
}

const SIZE_MAP = {
  small: 'px-4 py-2',
  medium: 'px-6 py-4',
  large: 'px-12 py-8',
}

const Button = (props: ButtonProps) => {
  const {
    children,
    append,
    prepend,
    btnClass = '',
    size = 'small',
    variant = 'primary',
    ...otherProps
  } = props

  const btnSize = SIZE_MAP[size]
  const btnVariant = BG_VARIANT_MAP[variant]

  return (
    <button
      className={`rounded-md ${btnSize} ${btnVariant} text-white flex flex-row justify-center items-center outline-none ${btnClass}`}
      {...otherProps}
    >
      {prepend && <span className="mr-2">{prepend}</span>}
      {children}
      {append && <span className="ml-2">{append}</span>}
    </button>
  )
}

export default Button
