import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bannerFg from "../../../images/chair.png";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const HomeBanner = () => {
	return (
		<Container>
			<Grid justifyContent='space-between' container spacing={2} sx={{ mt: 5 }}>
				<Grid item md={5} xs={12} sx={{ textAlign: "left" }}>
					<Typography
						variant='h3'
						component='div'
						sx={{ fontWeight: "bold", mb: 3 }}>
						Best <b style={{ color: "#2886FC" }}> Dental Clinic</b> You Can
						Trust
					</Typography>
					<Typography variant='body1' component='div'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
						aperiam provident. Possimus nostrum obcaecati delectus repellat,
						placeat soluta nulla velit molestiae, odit dolores illum ipsum sed
						est eius maxime quo.
					</Typography>
					<Link
						style={{ textDecoration: "none", color: "black" }}
						sx={{ my: 1 }}
						exact
						to='/appoinments'>
						<Button
							variant='contained'
							sx={{ mt: 4, backgroundColor: "#2886FC" }}>
							Get Appoinment
						</Button>
					</Link>
				</Grid>
				<Grid item md={6}>
					<img src={bannerFg} alt='' style={{ width: "100%" }} />
				</Grid>
			</Grid>
			<Grid container spacing={2} sx={{ mt: 5 }}>
				<Grid item md={4}>
					<Card
						elevation={0}
						sx={{
							maxWidth: 345,
							display: "flex",
							alignItems: "center",
							bgcolor: "#2886FC",
							color: "white",
							p: 2,
						}}>
						<AccessTimeIcon sx={{ fontSize: 80 }}></AccessTimeIcon>
						<Box sx={{ textAlign: "left", m: 1 }}>
							<Typography
								variant='h6'
								component='div'
								sx={{ fontWeight: "bold", py: 1 }}>
								Opening Hours
							</Typography>
							<Typography variant='body2' component='div'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								omnis?.
							</Typography>
						</Box>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card
						elevation={0}
						sx={{
							maxWidth: 345,
							display: "flex",
							alignItems: "center",
							bgcolor: "#2886FC",
							color: "white",
							p: 2,
						}}>
						<RoomIcon sx={{ fontSize: 80 }}></RoomIcon>
						<Box sx={{ textAlign: "left", m: 1 }}>
							<Typography
								variant='h6'
								component='div'
								sx={{ fontWeight: "bold", py: 1 }}>
								Visit Our Location
							</Typography>
							<Typography variant='body2' component='div'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								omnis?.
							</Typography>
						</Box>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card
						elevation={0}
						sx={{
							maxWidth: 345,
							display: "flex",
							alignItems: "center",
							bgcolor: "#2886FC",
							color: "white",
							p: 2,
						}}>
						<CallIcon sx={{ fontSize: 80 }}></CallIcon>
						<Box sx={{ textAlign: "left", m: 1 }}>
							<Typography
								variant='h6'
								component='div'
								sx={{ fontWeight: "bold", py: 1 }}>
								Contact Us Now
							</Typography>
							<Typography variant='body2' component='div'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								omnis?.
							</Typography>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomeBanner;
