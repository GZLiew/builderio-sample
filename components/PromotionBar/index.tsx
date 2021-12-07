import Link from 'next/link'
import Button from "@components/Button"
import { Invest } from "@components/Icons"

type PromotionalBarProps = {
  label: string
  buttonLabel: string
  link: string
}

const PromotionalBar = (props: PromotionalBarProps) => {
  return (
    <div className="bg-palette5 flex flex-row justify-center items-center py-2 px-4">
      <p className="text-palette1">{props.label}</p>
      <Link href={props.link || '/'}>
        <Button btnClass="ml-2" append={<Invest />}>{props.buttonLabel}</Button>
      </Link>
    </div>
  )
}

export default PromotionalBar

