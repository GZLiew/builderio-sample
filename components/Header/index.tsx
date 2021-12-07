import { DropdownMenu, MobileMenu } from '@components/Dropdown'
import { DropdownMenuProps } from '@components/Dropdown/DropdownMenu'
import { MainWhiteLogo, User } from '@components/Icons'

type HeaderProps = {
  menus: DropdownMenuProps[]
}

const Header = (props: HeaderProps) => {
  const { menus = [] } = props
  return (
    <div className="bg-palette4 p-4 px-8 flex flex-row items-center justify-between z-10">
      <MainWhiteLogo />
      <div className="hidden md:flex flex-row text-white w-1/2 justify-end">
        {menus.map((menu) => (
          <DropdownMenu label={menu.label} menus={menu.menus} />
        ))}
        <DropdownMenu
          label={<User />}
          menus={[
            { label: 'Login', href: '/login' },
            { label: 'Register', href: '/register' },
          ]}
        />
      </div>
      <div className="block md:hidden">
        <MobileMenu menus={menus} />
      </div>
    </div>
  )
}

export default Header
