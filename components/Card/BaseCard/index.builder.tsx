import { Builder } from '@builder.io/react'
import { BaseCard as BaseCardComp } from '@components/Card'

export const BaseCard = (props: React.ComponentProps<typeof BaseCardComp>) => {
  return <BaseCardComp {...props} />
}

Builder.registerComponent(BaseCard, {
  name: 'BaseCard',
  friendlyName: 'Card',
  canHaveChildren: true,
  inputs: [
    {
      name: 'variant',
      friendlyName: 'Variant',
      type: 'string',
      defaultValue: 'primary',
      enum: ['primary', 'secondary'],
    },
  ],
})
