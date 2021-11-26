import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";

import Appoinment from "../Appoinment/Appoinment";
import ContactUs from "../ContactUs/ContactUs";
import DentalCare from "../DentalCare/DentalCare";
import HomeBanner from "../HomeBanner/HomeBanner";
import OurBlog from "../OurBlog/OurBlog";
import OurDoctors from "../OurDoctors/OurDoctors";
import OurServices from "../OurServices/OurServices";
import Testimonial from "../Testimonial/Testimonial";

const HomeMain = () => {
	return (
		<div>
			<NavBar></NavBar>
			<HomeBanner></HomeBanner>
			<OurServices></OurServices>
			<DentalCare></DentalCare>
			<Testimonial></Testimonial>
			<Appoinment></Appoinment>
			<OurDoctors></OurDoctors>
			<OurBlog></OurBlog>
			<ContactUs></ContactUs>
			<Footer></Footer>
		</div>
	);
};

export default HomeMain;
