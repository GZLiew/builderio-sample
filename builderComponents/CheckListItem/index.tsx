import CheckListItemComp from '@components/CheckListItem'
import { Builder } from '@builder.io/react'

export const CheckListItem = (
  props: React.ComponentProps<typeof CheckListItemComp>
) => {
  return <CheckListItemComp {...props} />
}

Builder.registerComponent(CheckListItem, {
  name: 'CheckListItem',
  friendlyName: 'Check List Item',
  inputs: [
    {
      name: 'label',
      friendlyName: 'Label',
      type: 'string',
      defaultValue: 'Your Title',
    },
    {
      name: 'icon',
      friendlyName: 'Icon',
      type: 'string',
      defaultValue: 'check',
      enum: ['invest', 'user', 'check', 'play', 'caretDown', 'none'],
    },
  ],
})
