import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import doctor from "../../../images/doctor.png";
import appointmentBg from "../../../images/appointment-bg.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const Appoinment = () => {
	const bg = {
		backgroundImage: `linear-gradient(
      rgba(66, 63, 92, 0.9), 
      rgba(56, 63, 92, 0.9)
    ),
  url(${appointmentBg})`,
	};
	return (
		<Grid sx={{ mt: 15, px: 0, mx: "auto" }}>
			<Grid
				style={bg}
				container
				spacing={2}
				sx={{
					display: "flex",
					alignItems: "center",
				}}>
				<Grid item md={5} sx={{ mb: -0.7 }}>
					<img
						src={doctor}
						style={{ width: "100%", marginTop: "-140px" }}
						alt=''
					/>
				</Grid>
				<Grid item md={5} sx={{ textAlign: "left", color: "white", py: 2 }}>
					<Card elevation={0} sx={{ minWidth: 275, bgcolor: "transparent" }}>
						<CardContent>
							<Typography
								gutterBottom
								variant='h6'
								sx={{ fontWeight: "bold", color: "#2886FC" }}
								component='div'>
								APPOINMENT
							</Typography>
							<Typography
								gutterBottom
								variant='h3'
								sx={{ color: "white" }}
								component='div'>
								Make an appoinment today
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{ color: "white" }}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
								vero molestias eligendi accusamus corporis maiores,
								reprehenderit excepturi sint libero laborum.
							</Typography>
						</CardContent>
						<CardActions>
							<Link to='/appoinments' style={{ textDecoration: "none" }}>
								<Button
									variant='contained'
									sx={{ mt: 3, backgroundColor: "#2886FC" }}>
									BOOK NOW
								</Button>
							</Link>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Appoinment;
