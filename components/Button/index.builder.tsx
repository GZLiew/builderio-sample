import { Builder } from '@builder.io/react'
import ButtonComp from '@components/Button'
import { ICON_MAP } from '@components/Icons/utils'

type BuilderButtonProps = React.ComponentProps<typeof ButtonComp> & {
  icon: keyof typeof ICON_MAP
}

export const Button = (props: BuilderButtonProps) => {
  const { icon, ...btnProps } = props
  const IconComp = ICON_MAP[icon] || (() => null)
  return <ButtonComp append={<IconComp />} {...btnProps} />
}

Builder.registerComponent(Button, {
  name: 'Button',
  friendlyName: 'Button',
  inputs: [
    {
      name: 'children',
      friendlyName: 'Label',
      type: 'string',
      defaultValue: 'Title',
    },
    {
      name: 'variant',
      friendlyName: 'Variant',
      type: 'string',
      defaultValue: 'primary',
      enum: ['primary', 'secondary'],
    },
    {
      name: 'size',
      friendlyName: 'Size',
      type: 'string',
      defaultValue: 'small',
      enum: ['small', 'medium', 'large'],
    },
    {
      name: 'icon',
      friendlyName: 'Icon',
      type: 'string',
      defaultValue: 'none',
      enum: ['invest', 'user', 'check', 'play', 'caretDown', 'none'],
    },
  ],
})
