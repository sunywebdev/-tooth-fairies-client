import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, Typography } from "@mui/material";
import appointmentBg from "../../../images/appointment-bg.png";

const ContactUs = () => {
	const bg = {
		backgroundImage: `linear-gradient(
      rgba(66, 63, 92, 0.9), 
      rgba(56, 63, 92, 0.9)
    ),
  url(${appointmentBg})`,
	};
	return (
		<Container sx={{ mt: 5, py: 3, bgcolor: "text.secondary" }} style={bg}>
			<Box item md={5} sx={{ textAlign: "center" }}>
				<Typography
					color='#2886FC'
					sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
					variant='h5'>
					CONTACT US
				</Typography>
				<Typography
					variant='h4'
					sx={{ fontWeight: "bold", mb: 5, color: "white" }}>
					Always Connect With Us
				</Typography>
			</Box>

			<Grid container spacing={2}>
				<Grid item md={6} xs={12} sx={{ mx: "auto" }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							"& > :not(style)": { m: 2 },
						}}>
						<TextField
							sx={{ bgcolor: "white" }}
							id='demo-helper-text-misaligned'
							placeholder='Email Address'
						/>
						<TextField
							sx={{ bgcolor: "white" }}
							id='demo-helper-text-misaligned'
							placeholder='Subject'
						/>
						<TextField
							sx={{ bgcolor: "white" }}
							id='outlined-multiline-static'
							placeholder='Your Message'
							multiline
							rows={4}
						/>
						<Button
							variant='contained'
							sx={{ mt: 3, backgroundColor: "#2886FC" }}>
							Submit
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactUs;
