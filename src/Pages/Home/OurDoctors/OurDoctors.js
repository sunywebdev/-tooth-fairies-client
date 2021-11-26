import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import doctor from "../../../images/doctor-small.png";

const OurDoctors = () => {
	return (
		<Container sx={{ mt: 9 }}>
			<Typography
				sx={{ fontWeight: "bold", my: 5 }}
				color='#2886FC'
				variant='h5'>
				OUR DOCTORS
			</Typography>

			<Grid container spacing={2}>
				{Array.from({ length: 4 }).map((_, idx) => (
					<Grid item md={3}>
						<Card
							elevation={2}
							sx={{ maxWidth: 345, backgroundColor: "transparent" }}>
							<img
								src={doctor}
								alt=''
								style={{ width: "100%", backgroundColor: "#DDEAFA" }}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h6'
									sx={{ fontWeight: "bold", color: "#2886FC" }}
									component='div'>
									Dr. John Doe
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}>
									<CallIcon sx={{ mr: 1 }}></CallIcon>{" "}
									<span>+012-345-6789</span>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
export default OurDoctors;
