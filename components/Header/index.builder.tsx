import HeaderComp from '@components/Header'
import { Builder } from '@builder.io/react'

export const Header = () => {
  return <HeaderComp />
}

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [],
})
