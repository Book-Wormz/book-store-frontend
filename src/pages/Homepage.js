import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
	return (
		<div className="w-screen h-screen flex justify-center">
			<div className="w-[80%] h-[300px] flex justify-around flex-col">
				<h2>Newest Fiction</h2>
				{/* <Card /> */}
			</div>
		</div>
	);
};

export default Home;