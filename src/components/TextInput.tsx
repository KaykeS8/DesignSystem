import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'
    >
      {props.children}
    </div>
  )
}

interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props:TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

const TextInputInput = (props: TextInputInputProps) => {
  return (

    <input
      className={' outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400'}{...props} />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  icon: TextInputIcon
}