type NumberCheckListItemProps = {
  title: string
  description: string
}

type StepCheckListProps = {
  list: NumberCheckListItemProps[]
}

const StepCheckList = (props: StepCheckListProps) => {
  const { list = [] } = props
  return (
    <div className="border-t border-b border-palette4">
      {list.map((item, index) => (
        <div
          className={`flex flex-col md:flex-row justify-start items-center border-b border-palette4 last:border-none`}
        >
          <div className="text-palette4 text-7xl mr-4 p-6 md:w-1/4 text-center">{`0${index + 1}`}</div>
          <div className="flex flex-col items-center md:items-start justify-start py-3">
            <div className="text-2xl font-normal text-palette4 uppercase text-center md:text-left mb-2">
              {item.title}
            </div>
            <div className="text-sm text-palette1 text-center md:text-left">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StepCheckList
