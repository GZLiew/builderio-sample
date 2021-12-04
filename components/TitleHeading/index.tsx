type TitleHeadingProps = {
  label: string
}

const TitleHeading = (props: TitleHeadingProps) => {
  const { label } = props
  return <div className="big-title-font">{label}</div>
}

export default TitleHeading
