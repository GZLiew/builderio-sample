type PatternCardProps = {
  children: React.ReactNode
}

const PatternCard = (props: PatternCardProps) => {
  const { children } = props
  return (
    <div className="w-full h-full p-10 pattern-background flex flex-col justify-center items-center">
      <div className="mx-auto w-8/12 bg-white">{children}</div>
    </div>
  )
}

export default PatternCard
