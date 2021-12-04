import { MainWhiteLogo, User } from "@components/Icons"

const Header = () => {
  return (
    <div className="bg-palette4 p-4 px-8 flex flex-row items-center justify-between">
      <MainWhiteLogo />
      <div className="flex flex-row text-white w-3/5 justify-between">
        <div>INVEST</div>
        <div>HOW IT WORKS</div>
        <div>ABOUT</div>
        <div>THE TEAM</div>
        <div><User /></div>
      </div>
    </div>
  )
}

export default Header

