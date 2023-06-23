import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const stylesClass = asPath === rest.href && activeClassName;

  return (
    <Link {...rest} className={stylesClass}>{children}</Link>
  );
}
