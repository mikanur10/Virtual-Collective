import React from "react";
import "./Homepage.css";
// import ProductCards from '../../components/ProductCards/ProductCards'
import Layout from "../../components/shared/Layout/Layout";

const Homepage = () => {
  return (
    <Layout>
    <div>
      <img className="header-image"
        src="https://i.imgur.com/4NiANiq.jpg"
        alt="header"
        />
        <div className="image-text">A collective commited to fostering access to the arts & entertainment community...</div>
    </div>
  </Layout>
  )
};

export default Homepage;
