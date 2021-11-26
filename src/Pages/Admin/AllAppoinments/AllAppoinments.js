import React, { useEffect, useState } from "react";
import {
	Alert,
	Button,
	Grid,
	InputLabel,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import axios from "axios";
import DatePicker from "@mui/lab/DatePicker";
import { Box } from "@mui/system";

const AllAppoinments = () => {
	const [date, setDate] = React.useState(new Date());
	const [appoinments, setAppoinment] = useState([]);
	useEffect(() => {
		fetch(
			`https://vast-forest-93917.herokuapp.com/allAppoinments?date=${new Date(
				date,
			).toLocaleDateString("en-GB")}`,
		)
			.then((res) => res.json())
			.then((data) => setAppoinment(data));
	}, [date]);
	console.log(date);
	console.log(appoinments);
	const [open, setOpen] = React.useState(false);
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	const { register, handleSubmit } = useForm();
	const onSubmit = (data, id) => {
		console.log(data, id);
		axios
			.put(
				`https://vast-forest-93917.herokuapp.com/appoinments/${data?.id}`,
				data,
			)
			.then(function (response) {
				setOpen(true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const [totalAppoinments, setTotalAppoinment] = useState([]);
	useEffect(() => {
		fetch(`https://vast-forest-93917.herokuapp.com/totalAppoinments`)
			.then((res) => res.json())
			.then((data) => setTotalAppoinment(data));
	}, []);
	const [users, setusers] = useState([]);
	useEffect(() => {
		fetch(`https://vast-forest-93917.herokuapp.com/users`)
			.then((res) => res.json())
			.then((data) => setusers(data));
	}, []);
	return (
		<Grid container spacing={2}>
			<Grid item md={12}>
				<Grid container spacing={2}>
					<Grid item md={4} xs={12}>
						<Box
							component={Paper}
							sx={{
								display: "flex",
								flexDirection: "row",
								backgroundColor: "#4EB3C4",
								color: "white",
								p: 2,
								alignItems: "center",
							}}>
							<Box sx={{ flex: "1 0 auto" }}>
								<Typography variant='h2'>{users?.length}</Typography>
							</Box>
							<Box sx={{ textAlign: "left" }}>
								<Typography variant='h5'>Total Patients</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<Box
							component={Paper}
							sx={{
								display: "flex",
								flexDirection: "row",
								backgroundColor: "#70AE6A",
								color: "white",
								p: 2,
								alignItems: "center",
							}}>
							<Box sx={{ flex: "1 0 auto" }}>
								<Typography variant='h2'>{appoinments?.length}</Typography>
							</Box>
							<Box sx={{ textAlign: "left" }}>
								<Typography variant='h5'>Todays Appoinments</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<Box
							component={Paper}
							sx={{
								display: "flex",
								flexDirection: "row",
								color: "white",
								backgroundColor: "#D6695C",
								p: 2,
								alignItems: "center",
							}}>
							<Box sx={{ flex: "1 0 auto" }}>
								<Typography variant='h2'>{totalAppoinments?.length}</Typography>
							</Box>
							<Box sx={{ textAlign: "left" }}>
								<Typography variant='h5'>Total Appoinments</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Grid item md={12} xs={12}>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box>
						<Typography
							variant='h6'
							sx={{ color: "#2886FC", fontWeight: "bold" }}>
							Recent Appoinments
						</Typography>
					</Box>
					<Box>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								views={["day"]}
								value={date}
								onChange={(newValue) => {
									setDate(newValue);
								}}
								renderInput={(params) => (
									<TextField
										sx={{ maxWidth: 150 }}
										{...params}
										helperText={null}
									/>
								)}
							/>
						</LocalizationProvider>
					</Box>
				</Box>
			</Grid>

			<Grid item md={12} xs={12}>
				<Paper
					className='container'
					sx={{ overflow: "auto", maxHeight: "75vh" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow sx={{ th: { color: "#2886FC", fontWeight: "bold" } }}>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='left'>Date</TableCell>
								<TableCell align='left'>Time</TableCell>
								<TableCell align='left'>Contact</TableCell>
								<TableCell align='left'>For</TableCell>
								<TableCell align='left'>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{appoinments.length > 0 ? (
								<>
									{appoinments.map((appoinment) => (
										<TableRow
											key={appoinment?._id}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}>
											<TableCell align='left'>{appoinment?.name}</TableCell>
											<TableCell align='left'>{appoinment?.date}</TableCell>
											<TableCell align='left'>{appoinment?.time}</TableCell>
											<TableCell align='left'>{appoinment?.phone}</TableCell>
											<TableCell align='left'>
												{appoinment?.bookedAppoinment}
											</TableCell>
											<TableCell align='left'>
												<form onSubmit={handleSubmit(onSubmit)}>
													<FormControl
														variant='standard'
														sx={{ minWidth: 120 }}>
														<InputLabel id='demo-simple-select-autowidth-label'>
															{appoinment?.visitStatus || "Not Visited"}
														</InputLabel>
														<Select
															labelId='demo-simple-select-autowidth-label'
															id='demo-simple-select-autowidth'
															autoWidth
															label={appoinment?.visitStatus || "Not Visited"}
															{...register("visitStatus", { required: true })}>
															<MenuItem value='Visited'>Visited</MenuItem>
															<MenuItem value='Not Visited'>
																Not Visited
															</MenuItem>
															<MenuItem value='Cancelled'>Cancelled</MenuItem>
														</Select>
													</FormControl>
													<Button
														type='submit'
														value={appoinment?._id}
														{...register("id")}>
														<CheckBoxIcon fontSize='large'></CheckBoxIcon>
													</Button>
												</form>
											</TableCell>
										</TableRow>
									))}
								</>
							) : (
								<TableRow sx={{ th: { color: "#2886FC", fontWeight: "bold" } }}>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</Paper>
			</Grid>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					variant='filled'
					sx={{ width: "100%", backgroundColor: "#2886FC" }}>
					Status Changed Successfully !
				</Alert>
			</Snackbar>
		</Grid>
	);
};

export default AllAppoinments;
