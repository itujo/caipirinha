import Link from 'next/link';
import { forwardRef, ReactNode } from 'react';
import type { Url } from 'url';

interface LinkProps {
  href: string | Url;
  children: ReactNode;
  className: string;
}

const NextLink = forwardRef((props: LinkProps, ref: any) => {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export { NextLink };
