import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';

const Layout = (): JSX.Element => {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
