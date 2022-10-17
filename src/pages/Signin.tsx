import { Envelope, Lock } from 'phosphor-react';
import React, { FormEvent } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export function Signin() {

  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);

  function handleSignin(event:FormEvent) {
    event.preventDefault();

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className='flex flex-col items-center justify-center'>
        <Logo />
        <Heading size='md' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='sm' className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form onSubmit={handleSignin} className='flex flex-col items-stretch justify-center w-full max-w-[432px] mt-9 gap-[18px]'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.Input id="email" type={'email'} placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.Input id="password" type="password" placeholder='*********' />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text className='text-gray-400'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-4'>
        {isUserSignedIn && <p>Login Realizado</p>}
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size={'sm'}>
          <a href='' className='text-gray-400 underline'>Não possui conta: Crie uma agora</a>
        </Text>
      </footer>
    </div>
  )
}