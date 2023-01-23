// home.js
import React, { Component } from "react";
import asa from "./../img/asa-logo.png";
import wid from "./../img/wid-logo.png";
import Google from "./google.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Content home">
        <div class="row">
          <div class="col-sm-7">
            <a
              href="https://wid.wisc.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="wid-logo" src={wid} alt="WID Logo"></img>
            </a>
            <a
              href="https://www.amstat.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="home-img" src={asa} alt="ASA Logo"></img>
            </a>

            <h3 class="home-heading">Home heading</h3>

            <p class="home-text">
              Home text
            </p>
          </div>
          <div class="col-sm-5">
            <div class="btn-container-home">
              <a
                class="btn btn-outline-primary btn-lg btn-people"
                href="/people"
              >
                Find People
              </a>
              <Google></Google>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
