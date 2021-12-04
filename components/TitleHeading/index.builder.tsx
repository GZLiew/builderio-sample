import { Builder } from '@builder.io/react'
import TitleHeadingComp from '@components/TitleHeading'
import React from 'react'

export const TitleHeading = (
  props: React.ComponentProps<typeof TitleHeadingComp>
) => {
  return <TitleHeadingComp {...props} />
}

Builder.registerComponent(TitleHeading, {
  name: 'TitleHeading',
  friendlyName: 'Title Heading',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Title',
    },
  ],
})
