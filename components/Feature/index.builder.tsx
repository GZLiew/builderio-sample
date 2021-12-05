import { Builder } from '@builder.io/react'
import FeatureComp from '@components/Feature'

export const Feature = (props: React.ComponentProps<typeof FeatureComp>) => {
  return <FeatureComp {...props} />
}

Builder.registerComponent(Feature, {
  name: 'Feature',
  friendlyName: 'Feature',
  inputs: [
    {
      name: 'title',
      friendlyName: 'Title',
      type: 'string',
      defaultValue: 'Your Title',
    },
    {
      name: 'description',
      friendlyName: 'Description',
      type: 'string',
      defaultValue: 'Your Description',
    },
    {
      name: 'icon',
      friendlyName: 'Icon',
      type: 'string',
      defaultValue: 'AmpleLeverage',
      enum: [
        'AmpleLeverage',
        'CapitalAppreciation',
        'Diversity',
        'Flexible',
        'SaveTime',
        'TaxAdvantages',
      ],
    },
  ],
})
