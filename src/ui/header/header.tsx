import { Logo } from '../logo/logo';
import { ProfileNav } from '../profile-nav/profile-nav';

type HeaderProps = {
  variant?: 'main' | 'auth';
};

export function Header({ variant = 'main' }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {variant === 'main' && (<ProfileNav/>)}
        </div>
      </div>
    </header>
  );
}
