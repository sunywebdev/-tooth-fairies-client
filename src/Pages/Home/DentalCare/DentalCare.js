import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";
const DentalCare = () => {
	return (
		<Container sx={{ mt: 9 }}>
			<Grid
				container
				spacing={3}
				sx={{ display: "flex", alignItems: "center" }}>
				<Grid item md={5}>
					<img src={treatment} style={{ width: "100%" }} alt='' />
				</Grid>
				<Grid item md={6} sx={{ textAlign: "left" }}>
					<Typography
						gutterBottom
						variant='h3'
						sx={{ lineHeight: "1.7", fontWeight: "bold" }}
						component='div'>
						We Care About Your Dental Health
					</Typography>
					<Typography
						variant='body1'
						color='text.secondary'
						sx={{ lineHeight: "2" }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ex?
						Fuga optio eos fugiat repellendus consectetur. Alias distinctio
						officiis tempore! Voluptate atque maxime, blanditiis quos aliquid
						ipsa illum ad veritatis?
					</Typography>
					<Button
						variant='contained'
						sx={{ mt: 3, backgroundColor: "#2886FC" }}>
						Learn More
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DentalCare;
