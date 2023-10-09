import Link from 'next/link';
import { Logo } from './../components';
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full px-4">
      <div className="container  w-min-[360px] m-auto">
        <Link href={'/'}>
          <Logo size="full" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
