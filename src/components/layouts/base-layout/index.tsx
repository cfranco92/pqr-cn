import React, { ReactNode } from "react";

interface BaseLayoutProps {
  page: string;
  children: ReactNode;
}

const BaseLayout = ({ page, children }: BaseLayoutProps) => {
  return <section id={page}>{children}</section>;
};

export default BaseLayout;
