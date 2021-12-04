import CheckListItem, { CheckListItemProps } from '@components/CheckListItem'

type CheckListProps = {
  list: CheckListItemProps[]
}

const CheckList = (props: CheckListProps) => {
  const { list = [] } = props
  return (
    <div>
      {list.map((item) => (
        <CheckListItem {...item} className="mb-2" />
      ))}
    </div>
  )
}

export default CheckList
