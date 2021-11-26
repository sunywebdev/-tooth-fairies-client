import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const OurServices = () => {
	return (
		<Container sx={{ mt: 9 }}>
			<Typography
				color='#2886FC'
				sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
				variant='h6'>
				OUR SERVICES
			</Typography>
			<Typography variant='h4' sx={{ fontWeight: "bold", mb: 7 }}>
				Services We Provide
			</Typography>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<Card
						elevation={0}
						sx={{ maxWidth: 345, backgroundColor: "#DDEAFA" }}>
						<img src={fluoride} style={{ paddingTop: 11 }} alt='' />
						<CardContent>
							<Typography
								gutterBottom
								variant='h6'
								sx={{ fontWeight: "bold", color: "#2886FC" }}
								component='div'>
								Fluoride Treatment
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								molestiae ex facilis reprehenderit molestias, laboriosam
								consectetur optio voluptas mollitia itaque!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card
						elevation={0}
						sx={{ maxWidth: 345, backgroundColor: "#DDEAFA" }}>
						<img src={cavity} style={{ paddingTop: 11 }} alt='' />
						<CardContent>
							<Typography
								gutterBottom
								variant='h6'
								sx={{ fontWeight: "bold", color: "#2886FC" }}
								component='div'>
								Cavity Filling
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								molestiae ex facilis reprehenderit molestias, laboriosam
								consectetur optio voluptas mollitia itaque!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card
						elevation={0}
						sx={{ maxWidth: 345, backgroundColor: "#DDEAFA" }}>
						<img src={whitening} style={{ paddingTop: 11 }} alt='' />
						<CardContent>
							<Typography
								gutterBottom
								variant='h6'
								sx={{ fontWeight: "bold", color: "#2886FC" }}
								component='div'>
								Teeth Whitening
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								molestiae ex facilis reprehenderit molestias, laboriosam
								consectetur optio voluptas mollitia itaque!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default OurServices;
