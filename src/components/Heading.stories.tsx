import { Heading, Headingprops } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'My Header',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['md', 'sm', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<Headingprops>


export const Default = {}

export const Small: StoryObj<Headingprops> = {
  args: {
    size: 'sm',
  }
}

export const Larger: StoryObj<Headingprops> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<Headingprops> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable:true,
      }
    }
  }
}