import Link from 'next/link';
import { FOOTER_LINKS } from '~/data/navigation';
import styles from './index.module.css';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        {FOOTER_LINKS.left.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles.section}>
        {FOOTER_LINKS.right.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
