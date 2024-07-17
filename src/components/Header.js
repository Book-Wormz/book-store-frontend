import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Logo from "../assets/Book__1_-removebg-preview.png";

import "../App.css";

const Header = () => {
	return (
		<div>
			<div className="z-0 mt-[20px] flex flex-col md:flex-row justify-between pl-5 pr-5">
				<NavLink>
					<img
						className="absolute z-0 md:relative h-96 sm:h-60 w-96 sm:w-60 mt-[-110px] sm:mt-[-25px] md:ml-[10px] lg:ml-[50px] xl:ml-[-15px]"
						src={Logo}
						alt="Book worms logo"
					/>
				</NavLink>
				<MobileMenu />
				<div className="mt-[100px] w-full sm:w-[90%] xl:ml-[-40px] sm:mt-[-55px] flex items-center justify-center xl:justify-evenly flex-col-reverse xl:flex-row ">
					<NavBar />
					<SearchBar />
				</div>
			</div>
		</div>
	);
};

export default Header;
