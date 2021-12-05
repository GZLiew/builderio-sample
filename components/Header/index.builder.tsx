import HeaderComp from '@components/Header'
import { Builder } from '@builder.io/react'

export const Header = () => {
  return <HeaderComp />
}

Builder.registerComponent(Header, {
  name: 'Header',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0',
  inputs: [],
})
