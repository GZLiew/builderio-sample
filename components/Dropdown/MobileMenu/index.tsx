import Link from 'next/link'
import { Menu, MenuDivider, MenuHeader, MenuItem } from '@szhsin/react-menu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { DropdownMenuProps } from '../DropdownMenu'

type MobileMenuProps = {
  menus: DropdownMenuProps[]
}

const MobileMenu = (props: MobileMenuProps) => {
  const { menus } = props
  return (
    <Menu
      menuButton={
        <div className="cursor-pointer">
          <GiHamburgerMenu size={25} color="white" />
        </div>
      }
      offsetY={12}
      transition
    >
      {menus.map(({ label, href = '', menus: submenus }) =>
        submenus.length === 0 ? (
          <MenuItem className="w-screen">
            <Link href={href}>
              <div className="py-2 px-4 text-palette1">{label}</div>
            </Link>
          </MenuItem>
        ) : (
          <>
            <MenuDivider />
            <MenuHeader>{label}</MenuHeader>
            {submenus.map((submenu) => (
              <MenuItem>
                <Link href={submenu.href}>
                  <div className="py-2 px-4 text-palette1">{submenu.label}</div>
                </Link>
              </MenuItem>
            ))}
            <MenuDivider />
          </>
        )
      )}
    </Menu>
  )
}

export default MobileMenu
