type TitleHeadingProps = {
  label: string
}

const TitleHeading = (props: TitleHeadingProps) => {
  const { label } = props
  return <h2 className="text-4xl md:text-5xl">{label}</h2>
}

export default TitleHeading
