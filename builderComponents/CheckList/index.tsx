import { Builder } from '@builder.io/react'
import CheckListComp from '@components/CheckList'

export const CheckList = (
  props: React.ComponentProps<typeof CheckListComp>
) => {
  return <CheckListComp {...props} />
}

Builder.registerComponent(CheckList, {
  name: 'CheckList',
  friendlyName: 'Check List',
  inputs: [
    {
      name: 'list',
      friendlyName: 'Check List',
      type: 'list',
      defaultValue: [{ label: 'Your Title' }],
      subFields: [
        {
          name: 'label',
          type: 'string',
          defaultValue: '"You guys are the best"',
        },
        {
          name: 'icon',
          friendlyName: 'Icon',
          type: 'string',
          defaultValue: 'check',
          enum: ['invest', 'user', 'check', 'play', 'caretDown', 'none'],
        },
      ],
    },
  ],
})
