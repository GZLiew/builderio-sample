import HeaderComp from '@components/Header'
import { Builder } from '@builder.io/react'

export const Header = (props: React.ComponentProps<typeof HeaderComp>) => {
  return <HeaderComp {...props} />
}

Builder.registerComponent(Header, {
  name: 'Header',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0',
  inputs: [
    {
      name: 'menus',
      friendlyName: 'Menus',
      type: 'list',
      defaultValue: [
        { label: 'INVEST' },
        { label: 'HOW IT WORKS' },
        { label: 'ABOUT' },
      ],
      subFields: [
        {
          name: 'label',
          type: 'string',
          defaultValue: 'INVEST',
        },
        {
          name: 'href',
          friendlyName: 'Link',
          type: 'string',
          defaultValue: '/',
        },
        {
          name: 'menus',
          friendlyName: 'Sub Menus',
          type: 'list',
          subFields: [
            {
              name: 'label',
              type: 'string',
              defaultValue: 'INVEST',
            },
            {
              name: 'href',
              friendlyName: 'Link',
              type: 'string',
              defaultValue: '/',
            },
          ],
        },
      ],
    },
  ],
})
