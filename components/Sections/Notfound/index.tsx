import { ArrowLeftIcon } from 'lucide-react';
import ButtonLink from '~/components/Common/Button/Link';
import GlowingBackdrop from '~/components/Common/GlowingBackdrop';
import BaseLayout from '~/components/Layout/Base';
import styles from './index.module.css';
import type { FC } from 'react';

const NotFoundSection: FC = () => (
  <BaseLayout className={styles.notFoundSection}>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <ButtonLink href="/">
      <ArrowLeftIcon /> Go back to home
    </ButtonLink>
    <GlowingBackdrop />
  </BaseLayout>
);

export default NotFoundSection;
