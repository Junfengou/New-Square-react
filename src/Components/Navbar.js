import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={Logo} alt="logo" />
					</Link>

					<div className="menu-icon" onClick={handleClick}>
						{/* [fas fa-times]  is the x icon to exit menu*/}
						{/* [fas fa-bars] is the hamburger */}
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
						{/* <i className="fas fa-times" /> */}
					</div>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						{/* <ul className="nav-menu active"> */}
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/products"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/sign-up"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Sign-up
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
