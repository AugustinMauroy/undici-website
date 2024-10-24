import SquareGrid from '~/components/Icons/SquareGrid';
import styles from './index.module.css';
import type { FC } from 'react';

const GlowingBackdrop: FC = () => (
  <div className={styles.glowingBackdrop}>
    <SquareGrid />
  </div>
);

export default GlowingBackdrop;
