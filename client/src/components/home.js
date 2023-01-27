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
							<img
								class="wid-logo"
								src={wid}
								alt="WID Logo"
							></img>
						</a>
						<h3 class="home-heading">Welcome to the Forensics+Statistics database</h3>

						<p class="home-text">
							Welcome to the Forensics+Statistics database hosted
							at the Wisconsin Institute for Discovery (WID). This
							database contains information of statisticians and
							data scientists that are interested in serving as
							experts on trials or collaborating with forensic
							scientists or attorneys in understanding statistical
							concepts in forensic science. If you are a
							statistician or data scientist willing to contribute
							to the understanding of statistics in forensics,
							please add yourself to the database by logging in
							with Google and creating your profile. If you
							require the statistical expertise in forensic
							science, please use this database to identify
							potential collaborators.
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
