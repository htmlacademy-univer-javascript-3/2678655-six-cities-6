import { Outlet } from 'react-router-dom';
import { Header } from '../../../ui/header/header';

export function MainLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
