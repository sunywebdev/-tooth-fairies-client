import { Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import bg from "../../images/footer-bg.png";

const Footer = () => {
	const bgImg = {
		backgroundImage: `url(${bg})`,
		backgroundSize: "cover",
	};
	return (
		<Container sx={{ mt: 9 }}>
			<Grid
				style={bgImg}
				container
				spacing={2}
				color='text.secondary'
				sx={{ textAlign: "left", py: 5 }}>
				<Grid item md={3}>
					<Typography
						color='#2886FC'
						sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 1 }}
						variant='h5'>
						ABOUT
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						repellendus tenetur facilis sapiente cum consequuntur?
					</Typography>
				</Grid>
				<Grid item md={3}>
					<Typography
						color='#2886FC'
						sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 1 }}
						variant='h5'>
						SERVICES
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
				</Grid>
				<Grid item md={3}>
					<Typography
						color='#2886FC'
						sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 1 }}
						variant='h5'>
						ORAL HEALTH
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link sx={{ my: 1 }} href='#' underline='none' color='inherit'>
							Emergency Dental Care
						</Link>
					</Typography>
				</Grid>

				<Grid item md={3}>
					<Typography
						color='#2886FC'
						sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 1 }}
						variant='h5'>
						OUR ADDRESS
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Link href='#' underline='none' color='inherit'>
							12345 ABC Road, City, Country, 12345
						</Link>
					</Typography>
					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						<Button href='' sx={{ borderRadius: "50%" }}>
							<FacebookRoundedIcon
								sx={{ color: "#2886FC" }}
								fontSize='large'></FacebookRoundedIcon>
						</Button>
						<Button href='' sx={{ borderRadius: "50%" }}>
							<TwitterIcon
								sx={{ color: "#2886FC" }}
								fontSize='large'></TwitterIcon>
						</Button>
						<Button href='' sx={{ borderRadius: "50%" }}>
							<GoogleIcon
								sx={{ color: "#2886FC" }}
								fontSize='large'></GoogleIcon>
						</Button>
					</Typography>

					<Typography variant='subtitle1' sx={{ py: 0.7 }}>
						Call Now <br />
						<Button
							href=''
							variant='contained'
							sx={{ my: 1, backgroundColor: "#2886FC" }}>
							+123-456-789
						</Button>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
