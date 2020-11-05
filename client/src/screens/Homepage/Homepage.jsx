import React from "react";
import "./Homepage.css";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import Layout from "../../components/shared/Layout/Layout";

const Homepage = () => {
  return (
    <Layout>
      <div>
        <img
          className="header-image"
          src="https://i.imgur.com/4NiANiq.jpg"
          alt="header"
        />
        <div className="image-text">
          A collective commited to fostering access to the arts & entertainment
          community...
        </div>
      </div>
      <CategoryCards />
    </Layout>
  );
};

export default Homepage;
