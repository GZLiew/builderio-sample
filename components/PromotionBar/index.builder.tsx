import PromotionBarComp from '@components/PromotionBar'
import { Builder } from '@builder.io/react'

export const PromotionBar = (
  props: React.ComponentProps<typeof PromotionBarComp>
) => {
  return <PromotionBarComp {...props} />
}

Builder.registerComponent(PromotionBar, {
  name: 'PromotionBar',
  friendlyName: 'Promotion Bar',
  inputs: [
    {
      name: 'label',
      friendlyName: 'Label',
      type: 'string',
      defaultValue: 'Get Early Access! Sign up now before the waitlist closes.',
    },

    {
      name: 'buttonLabel',
      friendlyName: 'Button Label',
      type: 'string',
      defaultValue: 'Join Today',
    },
    {
      name: 'link',
      friendlyName: 'Link',
      type: 'string',
      defaultValue: 'Join Today',
    },
  ],
})
