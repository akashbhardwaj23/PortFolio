import React from 'react';
import { useLocation } from 'react-router-dom';

function SideBar() {
  let pathname = useLocation();

  React.useEffect(() => {
    // Google Analytics
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;

}


export default SideBar;