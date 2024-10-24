import classNames from 'classnames';
import Navbar from '~/components/Sections/Navbar';
import Footer from '~/components/Sections/Footer';
import styles from './index.module.css';
import type { FC, PropsWithChildren } from 'react';

type BaseLayoutProps = PropsWithChildren<{
  className?: string;
}>;

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => (
  <div className={classNames(className, styles.wrapper)}>
    <Navbar />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default BaseLayout;
