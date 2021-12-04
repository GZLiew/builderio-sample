import { Builder } from '@builder.io/react'
import { MainLogo as MainLogoComponent } from '@components/Icons'

export const MainLogo = () => <MainLogoComponent />

Builder.registerComponent(MainLogo, {
  name: 'MainLogo',
  friendlyName: 'Main Logo',
  inputs: [],
})
