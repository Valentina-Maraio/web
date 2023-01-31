import React from "react";
import "./style/Home.css";
import { Link } from "react-router-dom";
import Role from '../components/role/Role'
import Scroll from "../components/scroll/Scroll";

const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="menu_logo">
          <Link className="logo" to="/">
            Logo
          </Link>
        </div>
        <Role/>
        <Scroll/>
      </div>
    </>
  );
};

export default Home;
