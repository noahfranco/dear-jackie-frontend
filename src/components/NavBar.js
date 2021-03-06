import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <Menu>
        <h2 style={{ frontWeight: "900px", color: "#F699CD" }}> Zevgali </h2>

        <a className="menu-item" href="http://localhost:3000/">
          Home
        </a>
        <a className="menu-item" href="http://localhost:3000/viewdata">
          {" "}
          View Memories{" "}
        </a>
        <a className="menu-item" href="http://localhost:3000/makememories">
          {" "}
          Make Memories{" "}
        </a>
      </Menu>
    );
  }
}

export default Navbar;

// https://jackie.noahfranco.now.sh/
// https://jackie.noahfranco.now.sh/makememories
