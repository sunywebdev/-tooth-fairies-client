import {
	Alert,
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";
import axios from "axios";

const UpdateProfile = () => {
	const { user } = useAuth();
	console.log(user?.email);
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			gender: "",
			age: "",
			weight: "",
			address: "",
		},
	});

	const [open, setOpen] = React.useState(false);
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	const onSubmit = (data) => {
		axios
			.put("https://vast-forest-93917.herokuapp.com/users/updateUsers", data)
			.then(function (response) {
				setOpen(true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const [singleUser, setSingleUser] = useState([]);
	useEffect(() => {
		fetch(
			`https://vast-forest-93917.herokuapp.com/singleUsers?email=${user?.email}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setSingleUser(data);
				reset(data);
			});
	}, [open, reset, user?.email]);

	return (
		<Container>
			<Typography
				color='#2886FC'
				sx={{ textAlign: "center", pb: 4, fontWeight: "bold" }}
				variant='h4'>
				Update Profile
			</Typography>
			<Grid justifyContent='space-between' container spacing={3}>
				<Grid item xs={12} md={6}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								"& > :not(style)": { m: 1 },
							}}>
							<TextField
								value={singleUser?.displayName}
								type='text'
								label='Your Name'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("displayName")}
							/>
							<TextField
								value={singleUser?.email}
								type='email'
								label='Your Email'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("email", { required: true })}
							/>
							<TextField
								value={singleUser?.photoURL}
								type='text'
								label='Your PhotoURL'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("photoURL")}
							/>
							<FormControl sx={{ textAlign: "left" }}>
								<InputLabel id='demo-simple-select-autowidth-label'>
									Select Gender {">"} {singleUser?.gender}
								</InputLabel>
								<Select
									labelId='demo-simple-select-autowidth-label'
									id='demo-simple-select-autowidth'
									label={singleUser?.gender}
									{...register("gender", { required: true })}>
									<MenuItem value='Male'>Male</MenuItem>
									<MenuItem value='Female'>Female</MenuItem>
									<MenuItem value='Other'>Other</MenuItem>
								</Select>
							</FormControl>

							<TextField
								type='number'
								label='Age'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("age", { required: true })}
							/>
							<TextField
								type='number'
								label='Weight'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("weight", { required: true })}
							/>
							<TextField
								type='number'
								label='Contact'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("contact", { required: true })}
							/>
							<TextField
								type='text'
								label='Address'
								InputLabelProps={{
									shrink: true,
								}}
								{...register("address", { required: true })}
							/>
							<Button
								type='submit'
								variant='contained'
								sx={{ mt: 3, backgroundColor: "#2886FC" }}>
								Update Profile
							</Button>
						</Box>
					</form>
				</Grid>
				<Grid item xs={12} md={5}>
					<Card sx={{ maxWidth: 345, pt: 1 }}>
						<img height='170' src={singleUser?.photoURL} alt='' />
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
								sx={{ fontWeight: "bold", color: "#2886FC" }}>
								{singleUser?.displayName}
							</Typography>
							<TableContainer>
								<Table size='small' aria-label='a dense table'>
									<TableBody>
										<TableRow>
											<TableCell sx={{ fontWeight: "bold" }} align='left'>
												Email
											</TableCell>
											<TableCell align='left'>{singleUser?.email}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ fontWeight: "bold" }} align='left'>
												Gender
											</TableCell>
											<TableCell align='left'>{singleUser?.gender}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ fontWeight: "bold" }} align='left'>
												Age
											</TableCell>
											<TableCell align='left'>{singleUser?.age}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ fontWeight: "bold" }} align='left'>
												Weight
											</TableCell>
											<TableCell align='left'>{singleUser?.weight}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ fontWeight: "bold" }} align='left'>
												Contact
											</TableCell>
											<TableCell align='left'>{singleUser?.contact}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell sx={{ fontWeight: "bold" }} align='left'>
												Address
											</TableCell>
											<TableCell align='left'>{singleUser?.address}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					variant='filled'
					sx={{ width: "100%", backgroundColor: "#2886FC" }}>
					Profile Update Successful !
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default UpdateProfile;
