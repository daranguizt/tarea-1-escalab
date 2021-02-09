import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatar.png";
import "./header.styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      user_image: avatar,
    };
  }

  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="company-logo"></img>
          <div className="logo-text">
            Currency <br></br>Useless <br></br> Search
          </div>
        </Link>

        <div className="nav">
          <Link className="nav-item" to="/dashboard">
            Dashboard
          </Link>
          {this.state.isAuth ? (
            <div className="avatar">
              <img src={avatar} alt="avatar"></img>
            </div>
          ) : (
            <Link className="nav-item" to="/sign-in">
              Sign In
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
