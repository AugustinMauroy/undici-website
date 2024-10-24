'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

type ActiveLocalizedLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  allowSubPath?: boolean;
};

const ActiveLink: FC<ActiveLocalizedLinkProps> = ({
  children,
  activeClassName = 'active',
  allowSubPath = false,
  className,
  href = '',
  ...props
}) => {
  const pathname = usePathname();
  // When using allowSubPath we want only to check if
  // the current pathname starts with the utmost upper level
  // of an href (e.g. /docs/...)
  const finalClassName = classNames(className, {
    [activeClassName]: allowSubPath
      ? pathname.startsWith(`/${href.toString().split('/')[1]}`)
      : href.toString() === pathname,
  });

  return (
    <Link className={finalClassName} href={href} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
