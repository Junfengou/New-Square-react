import React from "react";
import Logo from "../Images/logo2.png";
import Tagline from "../Images/Tagline.png";
import "./Banner.css";

function Banner() {
	return (
		<div className="banner">
			<div className="overlay">
				<div className="contents">
					<div className="content__top">
						<img src={Logo} alt="" />
						{/* <h3>img goes here</h3> */}
					</div>
					<div className="content__bottom">
						{/* <h3>descriptions goes here</h3> */}
						<img src={Tagline} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
