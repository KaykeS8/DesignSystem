import React from 'react'
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface Headingprops {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: Boolean;
}

export const Heading = ({ size = 'md', children, asChild }: Headingprops) => {

  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={clsx(
      'text-gray-100 font-bold font-sans',
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg'
      }
    )}>
      {children}
    </Comp>
  )
}
