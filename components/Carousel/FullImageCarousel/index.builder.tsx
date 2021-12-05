import { Builder } from '@builder.io/react'
import { FullImageCarousel as FullImageCarouselComp } from '@components/Carousel'

export const FullImageCarousel = (
  props: React.ComponentProps<typeof FullImageCarouselComp>
) => {
  return <FullImageCarouselComp {...props} />
}

Builder.registerComponent(FullImageCarousel, {
  name: 'FullImageCarousel',
  friendlyName: 'Full Image Carousel',
  inputs: [
    {
      name: 'images',
      friendlyName: 'Images',
      type: 'list',
      subFields: [
        {
          name: 'src',
          friendlyName: 'Image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png'],
          required: true,
        },
        {
          name: 'alt',
          friendlyName: 'Description',
          type: 'string',
          defaultValue: 'description',
        },
        {
          name: 'exclusive',
          friendlyName: 'Exclusive Invitation?',
          type: 'boolean',
          defaultValue: false,
        },
      ],
    },
  ],
})
