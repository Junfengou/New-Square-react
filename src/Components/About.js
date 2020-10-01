import React from "react";
import Bacon from "../Images/bacons.png";
import "./About.css";

function About() {
	return (
		<div className="about">
			<div className="about__container">
				<div className="container__left">
					<img src={Bacon} alt="bacon" />
				</div>
				<div className="container__right">
					<h1>YOUR NEW NEIGHBORHOOD DONUT SHOP!</h1>
					<h5>
						Whether you’re nearby Square Donut in West Omaha or you drive a few
						minutes, we’re honored to be a part of your morning routine. Create
						memories with the family or be the hero at the office. Square Donut
						has handcrafted donuts to make your heart (and mouth) sing.{" "}
					</h5>
				</div>
			</div>
		</div>
	);
}

export default About;
