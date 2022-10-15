import React from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export interface Textprops {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: Boolean;
}

export const Text = ({ size = 'md', children, asChild }: Textprops) => {

  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={
        clsx('text-gray-100 font-sans',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg'
          }
        )
      }>
      {children}
    </Comp>
  )
}