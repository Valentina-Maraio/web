import React from "react";
import "./style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="menu_logo">
          <Link className="logo" to="/">
            Logo
          </Link>
        </div>

        <div className="title">
          <div className="info">
            <h1>Hi, I'm <i>Valentina.</i></h1>
            <h3>I'm a <i>self-thought</i> web and mobile developer form Italy who like to use creativity to solve problems</h3>
          </div>
        </div>


        <div className="about_my_approach">
          <h5>algo</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
