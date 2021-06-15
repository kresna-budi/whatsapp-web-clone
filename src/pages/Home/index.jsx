import React from "react";
import "./styles.css";
import Icon from "components/Icon";
import introImg from "assets/images/intro-connection-light.jpg";

const Home = () => {
	return (
		<div className="home">
			<div className="home__img-wrapper">
				<img src={introImg} alt="" className="home__img" />
			</div>

			<h1 className="home__title"> Keep your phone connected </h1>
			<p className="home__text">
				WhatsApp connects to your phone to sync messages. To reduce data usage,
				connect your phone to Wi-Fi.
			</p>
			<p className="home__text">
				<Icon id="laptop" className="home__icon" />
				<span>
					WhatsApp is available for Mac.{" "}
					<a
						href="https://www.whatsapp.com/download"
						target="_blank"
						className="home__link"
					>
						{" "}
						Get it here
					</a>
					.
				</span>
			</p>
		</div>
	);
};

export default Home;
