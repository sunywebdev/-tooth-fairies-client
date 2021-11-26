import { Alert, Snackbar } from "@mui/material";
import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const AppoinmentMain = () => {
	const [date, setDate] = React.useState(new Date());
	const [msgOpen, setMsgOpen] = React.useState(false);
	const [bookingSuccess, setBookingSuccess] = React.useState(false);
	const handleMsgClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setMsgOpen(false);
	};

	return (
		<div>
			<NavBar></NavBar>
			<AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
			<AvailableAppoinments
				setMsgOpen={setMsgOpen}
				date={date}
				setBookingSuccess={setBookingSuccess}></AvailableAppoinments>
			<Footer></Footer>

			{bookingSuccess === true && (
				<Snackbar
					open={msgOpen}
					autoHideDuration={5000}
					onClose={handleMsgClose}>
					<Alert
						onClose={handleMsgClose}
						variant='filled'
						sx={{ width: "100%",backgroundColor:'#2886FC' }}>
						New Appoinment Booked Successfully !
					</Alert>
				</Snackbar>
			)}
		</div>
	);
};

export default AppoinmentMain;
