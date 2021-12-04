import Button from "@components/Button"
import { Invest } from "@components/Icons"

const PromotionalBar = () => {
  return (
    <div className="bg-palette5 flex flex-row justify-center items-center py-2 px-4">
      <p className="text-palette1">Get Early Access! Sign up now before the waitlist closes.</p>
      <Button btnClass="ml-2" append={<Invest />}>Join Today</Button>
    </div>
  )
}

export default PromotionalBar

