import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;
export const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};
