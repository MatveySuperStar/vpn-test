"use client";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ClientAnchorLink: React.FC<{
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ children, href, className = "", onClick = () => {} }) => {
  return (
    <AnchorLink
      offset="200"
      href={href}
      className={className}
      onClick={onClick}
    >
      {children}
    </AnchorLink>
  );
};

export default ClientAnchorLink;
