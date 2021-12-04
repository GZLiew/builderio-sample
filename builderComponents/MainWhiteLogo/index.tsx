import { Builder } from '@builder.io/react'
import { MainWhiteLogo as MainWhiteLogoComp } from '@components/Icons'

export const MainWhiteLogo = () => <MainWhiteLogoComp />

Builder.registerComponent(MainWhiteLogo, {
  name: 'MainWhiteLogo',
  friendlyName: 'Main White Logo',
  inputs: [],
})
