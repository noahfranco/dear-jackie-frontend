import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./sidebar.scss"

class Navbar extends React.Component {

  render() {
    return (
      <Menu>
        <a className="menu-item" href="">
          HOME
        </a>
        <a className="menu-item" href="">
          ABOUT
        </a>
        <a className="menu-item" href="">
          REUNION SERVICE
        </a>
      </Menu>
    )
  }
}

export default Navbar; 


    
  