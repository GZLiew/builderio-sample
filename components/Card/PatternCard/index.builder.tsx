import { Builder, withChildren } from '@builder.io/react'
import { PatternCard as PatternCardComp } from '@components/Card'

export const PatternCard = withChildren(
  (props: React.ComponentProps<typeof PatternCardComp>) => {
    const { children, ...restProps } = props
    return <PatternCardComp {...restProps}>{children}</PatternCardComp>
  }
)

Builder.registerComponent(PatternCard, {
  name: 'PatternCard',
  friendlyName: 'Pattern Card',
  canHaveChildren: true,
  inputs: [
    {
      name: 'rounded',
      friendlyName: 'Background rounded',
      type: 'boolean',
      defaultValue: false,
    },
  ],
})
