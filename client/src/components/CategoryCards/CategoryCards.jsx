import React from "react";
import "./CategoryCards.css";
import { Link } from "react-router-dom";

function CategoryCards(props) {
  return (
    <div>
      <div>
        <h3 id="category-header">VIRTUAL EVENT GENRES</h3>
      </div>
      <div id="category-container">
        <Link to="/events/arts">
          <div id="art-category">ART</div>
        </Link>
        <Link to="/events/music">
          <div id="music-category">MUSIC</div>
        </Link>
        <Link to="/events/theatre">
          <div id="theatre-category">THEATRE</div>
        </Link>
        <Link to="/events/movies">
          <div id="movies-category">MOVIES</div>
        </Link>
        <Link to="/events/comedy">
          <div id="comedy-category">COMEDY</div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCards;
