import { Builder, withChildren } from '@builder.io/react'
import { PatternCard as PatternCardComp } from '@components/Card'

export const PatternCard = withChildren(
  (props: React.ComponentProps<typeof PatternCardComp>) => {
    const { children } = props
    return <PatternCardComp>{children}</PatternCardComp>
  }
)

Builder.registerComponent(PatternCard, {
  name: 'PatternCard',
  friendlyName: 'Pattern Card',
  canHaveChildren: true,
  inputs: [],
})
