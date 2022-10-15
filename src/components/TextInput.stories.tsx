import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps, TextInputInputProps } from './TextInput';


export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.icon>
          <Envelope/>
        </TextInput.icon>
        <TextInput.Input placeholder="Type your e-maill address" />
      </>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>


export const Default: StoryObj<TextInputInputProps> = {}

export const WhitoutIcon:StoryObj<TextInputInputProps> = {
  args: {
    children:(
      <TextInput.Input placeholder='Type your e-mail address'/>
    )
  }
}