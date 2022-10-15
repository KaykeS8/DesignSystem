import { Text, Textprops } from './Text';
import { Meta, StoryObj } from '@storybook/react';;

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      }
    }
  }
} as Meta<Textprops>

export const Default: StoryObj<Textprops> = {}

export const Small: StoryObj<Textprops> = {
  args: {
    size: 'sm',
  },
}

export const Larger: StoryObj<Textprops> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<Textprops> = {
  args: {
    asChild: true,
    children: <p>Text with p</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table:{ 
        disable:true,
      }
    }
  }
}