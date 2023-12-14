import * as React from 'react';
import { useLocation } from 'react-router-dom';

function SideBar() {
  let pathname = useLocation();
  console.log(typeof pathname);

  React.useEffect(() => {
    // Google Analytics
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;

}


export default SideBar;