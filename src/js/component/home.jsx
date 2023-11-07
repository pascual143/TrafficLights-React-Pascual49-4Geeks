import React from "react";
import Lights from "./lights";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="body">
			<div className="trafficTop"></div>
			<Lights />
		</div>
	);
};

export default Home;
