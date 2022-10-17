import { StoryObj, Meta } from "@storybook/react";
import { Signin } from "./Signin";
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'Pages/Signin',
  component: Signin,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), 'kayke.simao@gmail.com')
    userEvent.type(canvas.getByPlaceholderText("*********"), '12345678')
    userEvent.click(canvas.getByRole("button"))

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado')).toBeInTheDocument();
    })
  }
}