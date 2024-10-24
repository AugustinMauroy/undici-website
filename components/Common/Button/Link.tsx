import Link from 'next/link';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';
import type { FC, ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link> & {
  kind?: 'solid' | 'outline';
  variant?: 'primary' | 'secondary';
  special?: boolean;
};

const ButtonLink: FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      kind = 'solid',
      variant = 'primary',
      className,
      special = false,
      ...props
    },
    ref
  ) => (
    <Link
      ref={ref}
      className={classNames(
        styles.link,
        styles[kind],
        styles[variant],
        className,
        {
          [styles.special]: special && kind === 'solid',
        }
      )}
      {...props}
    >
      {children}
    </Link>
  )
);

ButtonLink.displayName = 'Link';

export default ButtonLink;
