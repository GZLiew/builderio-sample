import Link from 'next/link'

import { CaretDown } from '@components/Icons'
import { Menu, MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

type MenuProp = {
  label: string
  href: string
}

export type DropdownMenuProps = {
  label: React.ReactNode
  menus: MenuProp[]
  href?: string
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { label, menus = [], href = '/' } = props

  if (menus.length === 0) {
    return (
      <Link href={href}>
        <div className="cursor-pointer flex flex-row items-center pl-6">
          {label}
        </div>
      </Link>
    )
  }

  return (
    <Menu
      menuButton={
        <div className="cursor-pointer flex flex-row items-center pl-6">
          {label} <CaretDown className="ml-1" />
        </div>
      }
      offsetY={12}
      transition
    >
      {menus.map((menu) => (
        <MenuItem>
          <Link href={menu.href}>
            <div className="py-2 px-4 text-palette1">{menu.label}</div>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default DropdownMenu
