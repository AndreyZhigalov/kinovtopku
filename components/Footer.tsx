import Link from 'next/link';
import FooterNavigation from './FooterNavigation';
import { Logo } from './../components';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-[#151515] py-8 px-4">
      <div className="container w-min-[360px] m-auto flex flex-wrap gap-[50px]">
        <Link href={'/'}>
          <Logo size="short" />
        </Link>
        <FooterNavigation />
      </div>
    </footer>
  );
};

export default Footer;
