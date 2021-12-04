import { Builder } from '@builder.io/react'
import { FeatureCard as FeatureCardComp } from '@components/Card'

export const FeatureCard = (
  props: React.ComponentProps<typeof FeatureCardComp>
) => {
  return <FeatureCardComp {...props} />
}

Builder.registerComponent(FeatureCard, {
  name: 'FeatureCard',
  friendlyName: 'Feature Card',
  inputs: [
    {
      name: 'title',
      friendlyName: 'Card Title',
      type: 'string',
      defaultValue: 'Your Title',
    },
    {
      name: 'locationLabel',
      friendlyName: 'Location Label',
      type: 'string',
      defaultValue: 'Your Location',
    },
    {
      name: 'price',
      friendlyName: 'Price',
      type: 'string',
      defaultValue: '$ 30 MIL',
    },
    {
      name: 'features',
      friendlyName: 'Features',
      type: 'list',
      subFields: [
        {
          name: 'price',
          friendlyName: 'Price',
          type: 'string',
          defaultValue: '$100',
        },
        {
          name: 'description',
          friendlyName: 'Description',
          type: 'string',
          defaultValue: 'description',
        },
      ],
    },
    {
      name: 'variant',
      friendlyName: 'Variant',
      type: 'string',
      defaultValue: 'primary',
      enum: ['primary', 'secondary'],
    },
  ],
})
