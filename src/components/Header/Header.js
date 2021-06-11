import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faHouseUser,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Grid, Button } from "@material-ui/core";

const Header = () => {
  const linkStyle = {
    color: "white",
    margin: " 10px 30px",
  };

  function logOut() {
    document.body.innerHTML =
      '<h2 style="text-align:center""margin-bottom:20px"> Logged Out Successfully!!! </br> Please Log In To Sign In Again....... </h2>';
  }

  return (
    <>
      <header className="head">
        <Link to={`/`} style={linkStyle}>
          <FontAwesomeIcon icon={faShareAlt} />
          <h3 id="head">
            <strong> Task-Management App </strong>
          </h3>
        </Link>
        <nav>
          <Link to={`/login`} style={linkStyle}>
            <FontAwesomeIcon icon={faSignInAlt} /> <p id="home"> Login </p>
          </Link>
          <Link to={`/`} style={linkStyle}>
            <FontAwesomeIcon icon={faHouseUser} /> <p id="home"> Home </p>
          </Link>
          <Grid item>
            <Button
              variant="contained"
              onClick={logOut}
              color="secondary"
              size="small"
              style={{ marginTop: "8px" }}
            >
              Logout
            </Button>
          </Grid>
        </nav>
      </header>
    </>
  );
};

export default Header;
