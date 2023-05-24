import { Button, Input } from '@/styled-component';
import { FunctionComponent, useRef } from 'react';

interface RegistrationProps {
  callback():void
}

const Registration: FunctionComponent<RegistrationProps> = ({callback}) => {
  const fields = useRef<HTMLInputElement[]>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('+++')
    callback()
  };

  return (
    <form onSubmit={onSubmit}>
      <Input ref={(ref: HTMLInputElement) => fields.current.push(ref)} name='name' type='text' placeholder='FIO' />
      <Input ref={(ref: HTMLInputElement) => fields.current.push(ref)} name='email' type='text' placeholder='Email' />
      <Button type='submit'>Регистрация</Button>
    </form>
  );
};

export default Registration;
