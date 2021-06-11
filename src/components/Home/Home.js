import React from "react";
import starterImg1 from "../../Assets/homepage.png";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="starter">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 starter-text">
            <div>
              <h1 style={{ color: "goldenrod" }}>
                <i class="fa fa-share-alt" aria-hidden="true"></i> Task -
                Management
              </h1>
              <p style={{ fontSize: "20px" }}>
                <strong> Lets Start By Logging In Below!!! </strong>
              </p>
              <Link to={`/login`}>
                <Button
                  variant="contained"
                  style={{ color: "blue", backgroundColor: "cyan" }}
                  disableElevation
                >
                  <strong> Login </strong>
                </Button>
              </Link>
              <Link to={`/registration`}>
                <Button
                  variant="contained"
                  style={{
                    color: "blue",
                    backgroundColor: "cyan",
                    paddingRight: "10px",
                  }}
                  disableElevation
                >
                  <strong> Sign Up </strong>
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div>
              <img src={starterImg1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
