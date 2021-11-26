import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import AppoinmentModal from "../AppoinmentModal/AppoinmentModal";
const AllAvailableApoinments = ({
	booking,
	date,
	setMsgOpen,
	setBookingSuccess,
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Grid item md={4} xs={12}>
				<Card key={booking?.id} sx={{ maxWidth: 345, py: 4 }}>
					<CardContent>
						<Typography
							sx={{ fontWeight: "bold", my: 2 }}
							color='#2886FC'
							variant='h5'>
							{booking?.name}
						</Typography>
						<Typography
							gutterBottom
							variant='h6'
							sx={{ fontWeight: "bold" }}
							component='div'>
							{booking?.time}
						</Typography>
						<Typography variant='body2' backgr='text.secondary'>
							{booking?.space} Speaces Available
						</Typography>
					</CardContent>
					<Button
						onClick={handleOpen}
						variant='contained'
						sx={{ my: 1, backgroundColor: "#2886FC" }}>
						Book Appoinment
					</Button>
				</Card>
			</Grid>
			<AppoinmentModal
				handleClose={handleClose}
				setOpen={setOpen}
				setMsgOpen={setMsgOpen}
				open={open}
				booking={booking}
				setBookingSuccess={setBookingSuccess}
				date={date}></AppoinmentModal>
		</>
	);
};

export default AllAvailableApoinments;
