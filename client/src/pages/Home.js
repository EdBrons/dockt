import "./Home.css";
import React from "react";

import Navbar from "../components/Navbar";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar></Navbar>
      </div>
    );
  }
}
export default Home;
