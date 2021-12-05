import { Builder } from '@builder.io/react'
import StepCheckListComp from '@components/StepCheckList'

export const StepCheckList = (
  props: React.ComponentProps<typeof StepCheckListComp>
) => {
  return <StepCheckListComp {...props} />
}

Builder.registerComponent(StepCheckList, {
  name: 'StepCheckList',
  friendlyName: 'Step Check List',
  inputs: [
    {
      name: 'list',
      friendlyName: 'Step Check List',
      type: 'list',
      defaultValue: [{ title: 'Title', description: 'Description' }],
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Title',
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: 'Description',
        },
      ],
    },
  ],
})
