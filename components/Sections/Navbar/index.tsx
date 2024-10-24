import Link from 'next/link';
import ActiveLink from '~/components/Utility/ActiveLink';
import { NAVBAR_LINKS } from '~/data/navigation';
import styles from './index.module.css';
import type { FC } from 'react';

const Navbar: FC = () => (
  <nav className={styles.navbar}>
    <ul>
      <li>
        <Link href='/'>
          Undici
        </Link>
      </li>
      {NAVBAR_LINKS.left.map(link => (
        <li key={link.href}>
          <ActiveLink href={link.href} activeClassName={styles.active} allowSubPath>
            {link.label}
          </ActiveLink>
        </li>
      ))}
    </ul>
    <ul>
      {NAVBAR_LINKS.right.map(link => (
        <li key={link.href}>
          <ActiveLink href={link.href} activeClassName={styles.active}>
            {link.label}
          </ActiveLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
