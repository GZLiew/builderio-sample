import PromotionBarComp from '@components/PromotionBar'
import { Builder } from '@builder.io/react';

export const PromotionBar = () => {
  return (
    <PromotionBarComp />
  )
}

Builder.registerComponent(PromotionBar, {
  name: 'PromotionBar',
  friendlyName: 'Promotion Bar',
  inputs: [],
})

