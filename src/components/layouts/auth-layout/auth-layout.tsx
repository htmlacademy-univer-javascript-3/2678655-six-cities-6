import { Outlet } from 'react-router-dom';
import { Header } from '../../../ui/header/header';

export function AuthLayout(): JSX.Element {
  return(
    <>
      <Header variant={'auth'} />
      <Outlet/>
    </>
  );
}
