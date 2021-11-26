import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AllAvailableApoinments from "../AllAvailableApoinments/AllAvailableApoinments";

const AvailableAppoinments = ({ date, setMsgOpen, setBookingSuccess }) => {
	const bookings = [
		{
			id: 1,
			name: "Teeth Orthodonics",
			time: "08.00 AM - 09.00 AM",
			space: 10,
		},
		{
			id: 2,
			name: "Cosmetic Dentistry",
			time: "09.00 AM - 10.00 AM",
			space: 8,
		},
		{
			id: 3,
			name: "Teeth Cleaning",
			time: "10.00 AM - 11.00 AM",
			space: 9,
		},
		{
			id: 4,
			name: "Cavity Protection",
			time: "11.00 AM - 12.00 PM",
			space: 5,
		},
		{
			id: 5,
			name: "Pediatric Dental",
			time: "06.00 PM - 07.00 PM",
			space: 10,
		},
		{
			id: 6,
			name: "Oral Surgery",
			time: "07.00 PM - 08.00 PM",
			space: 10,
		},
	];
	return (
		<Container sx={{ mt: 9 }}>
			<Typography
				sx={{ fontWeight: "bold", my: 5 }}
				color='#2886FC'
				variant='h4'>
				Available Appoinments on {date?.toDateString()}
			</Typography>
			<Grid container spacing={5}>
				{bookings.map((booking) => (
					<AllAvailableApoinments
						key={booking?.id}
						booking={booking}
						setMsgOpen={setMsgOpen}
						setBookingSuccess={setBookingSuccess}
						date={date}></AllAvailableApoinments>
				))}
			</Grid>
		</Container>
	);
};

export default AvailableAppoinments;
