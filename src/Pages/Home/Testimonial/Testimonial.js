import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import quote from "../../../images/quote.png";
import { Box } from "@mui/system";

const Testimonial = () => {
	return (
		<Container sx={{ mt: 9 }}>
			<Grid justifyContent='space-between' container spacing={2}>
				<Grid item md={5}>
					<Typography
						color='#2886FC'
						sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 1 }}
						variant='h5'>
						TESTIMONIAL
					</Typography>
					<Typography variant='h3' sx={{ textAlign: "left", mb: 5 }}>
						What's Our Patient Says
					</Typography>
				</Grid>
				<Grid item md={3} sx={{ display: { md: "block", xs: "none" } }}>
					<img src={quote} alt='' sx={{ float: "right" }} />
				</Grid>
			</Grid>

			<Grid container spacing={2}>
				<Grid item md={4}>
					<Card sx={{ maxWidth: 345 }}>
						<CardContent>
							<Typography variant='body1' color='text.secondary'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								molestiae ex facilis reprehenderit molestias, laboriosam
								consectetur optio voluptas mollitia itaque!
							</Typography>
						</CardContent>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								p: 2,
								justifyContent: "center",
							}}>
							<Box>
								<img src={people1} alt='' style={{ width: "55px" }} />
							</Box>
							<Box sx={{ ml: 3, textAlign: "left" }}>
								<Typography variant='h6' component='div' color='#2886FC'>
									John Doe
								</Typography>
								<Typography variant='body2' component='div'>
									California
								</Typography>
							</Box>
						</Grid>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card sx={{ maxWidth: 345 }}>
						<CardContent>
							<Typography variant='body1' color='text.secondary'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								molestiae ex facilis reprehenderit molestias, laboriosam
								consectetur optio voluptas mollitia itaque!
							</Typography>
						</CardContent>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								p: 2,
								justifyContent: "center",
							}}>
							<Box>
								<img src={people2} alt='' style={{ width: "55px" }} />
							</Box>
							<Box sx={{ ml: 3, textAlign: "left" }}>
								<Typography variant='h6' component='div' color='#2886FC'>
									John Doe
								</Typography>
								<Typography variant='body2' component='div'>
									California
								</Typography>
							</Box>
						</Grid>
					</Card>
				</Grid>
				<Grid item md={4}>
					<Card sx={{ maxWidth: 345 }}>
						<CardContent>
							<Typography variant='body1' color='text.secondary'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								molestiae ex facilis reprehenderit molestias, laboriosam
								consectetur optio voluptas mollitia itaque!
							</Typography>
						</CardContent>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								p: 2,
								justifyContent: "center",
							}}>
							<Box>
								<img src={people3} alt='' style={{ width: "55px" }} />
							</Box>
							<Box
								sx={{
									ml: 3,
									textAlign: "left",
								}}>
								<Typography variant='h6' component='div' color='#2886FC'>
									John Doe
								</Typography>
								<Typography variant='body2' component='div'>
									California
								</Typography>
							</Box>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};
export default Testimonial;
