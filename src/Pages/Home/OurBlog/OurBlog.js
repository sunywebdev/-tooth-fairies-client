import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import { Box } from "@mui/system";

const OurBlog = () => {
	return (
		<Container sx={{ mt: 9 }}>
			<Box item md={5} sx={{ textAlign: "center" }}>
				<Typography
					color='#2886FC'
					sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
					variant='h5'>
					OUR BLOG
				</Typography>
				<Typography variant='h4' sx={{ fontWeight: "bold", mb: 5 }}>
					From Our Blog News
				</Typography>
			</Box>

			<Grid container spacing={2}>
				<Grid item md={4}>
					<Card sx={{ textAlign: "left", maxWidth: 345 }}>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								p: 2,
								justifyContent: "left",
							}}>
							<Box>
								<img src={people1} alt='' style={{ width: "55px" }} />
							</Box>
							<Box sx={{ ml: 3, textAlign: "left", color: "#2886FC" }}>
								<Typography variant='h6' component='div'>
									John Doe
								</Typography>
								<Typography variant='body2' component='div'>
									24 April 2021
								</Typography>
							</Box>
						</Grid>
						<CardContent sx={{ py: 0 }}>
							<Typography variant='h6' component='div' sx={{ mb: 2 }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing.
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
					<Card sx={{ textAlign: "left", maxWidth: 345 }}>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								p: 2,
								justifyContent: "left",
							}}>
							<Box>
								<img src={people2} alt='' style={{ width: "55px" }} />
							</Box>
							<Box sx={{ ml: 3, textAlign: "left", color: "#2886FC" }}>
								<Typography variant='h6' component='div'>
									John Doe
								</Typography>
								<Typography variant='body2' component='div'>
									24 April 2021
								</Typography>
							</Box>
						</Grid>
						<CardContent sx={{ py: 0 }}>
							<Typography variant='h6' component='div' sx={{ mb: 2 }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing.
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
					<Card sx={{ textAlign: "left", maxWidth: 345 }}>
						<Grid
							sx={{
								display: "flex",
								alignItems: "center",
								p: 2,
								justifyContent: "left",
							}}>
							<Box>
								<img src={people3} alt='' style={{ width: "55px" }} />
							</Box>
							<Box sx={{ ml: 3, textAlign: "left", color: "#2886FC" }}>
								<Typography variant='h6' component='div'>
									John Doe
								</Typography>
								<Typography variant='body2' component='div'>
									24 April 2021
								</Typography>
							</Box>
						</Grid>
						<CardContent sx={{ py: 0 }}>
							<Typography variant='h6' component='div' sx={{ mb: 2 }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing.
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
export default OurBlog;
