import React from 'react';
import UniversalNav from "../UniversalNav/UniversalNav";
import Footer from "../Footer/Footer";

function UniversalLayout(props) {
  return (
    <div className="layout">
    <UniversalNav />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
  );
}

export default UniversalLayout;