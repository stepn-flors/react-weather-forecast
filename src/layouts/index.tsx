import React from "react";

import Header from "./Header";

const Layout: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
