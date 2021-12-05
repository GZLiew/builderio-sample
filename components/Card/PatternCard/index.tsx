type PatternCardProps = {
  children: React.ReactNode
  rounded?: boolean
}

const PatternCard = (props: PatternCardProps) => {
  const { children, rounded } = props
  return (
    <div
      className={`w-full h-full px-4 sm:px-10 py-10 pattern-background flex flex-col justify-center items-center overflow-hidden ${
        rounded ? 'rounded-full' : ''
      }`}
    >
      <div className="mx-auto w-auto bg-white">{children}</div>
    </div>
  )
}

export default PatternCard
