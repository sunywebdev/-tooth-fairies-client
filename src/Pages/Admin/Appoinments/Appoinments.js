import React, { useEffect, useState } from "react";
import {
	Alert,
	Button,
	Container,
	Grid,
	InputLabel,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../context/useAuth";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import axios from "axios";

const Appoinments = () => {
	const { user } = useAuth();
	const [date, setDate] = React.useState(new Date());
	const [appoinments, setAppoinment] = useState([]);
	useEffect(() => {
		fetch(
			`https://vast-forest-93917.herokuapp.com/appoinments?date=${new Date(
				date,
			).toLocaleDateString("en-GB")}&email=${user?.email}`,
		)
			.then((res) => res.json())
			.then((data) => setAppoinment(data));
	}, [date]);
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

	return (
		<Container>
			<Typography
				color='#2886FC'
				sx={{ textAlign: "center", pb: 4, fontWeight: "bold" }}
				variant='h4'>
				My Appoinments
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<StaticDatePicker
							displayStaticWrapperAs='desktop'
							value={date}
							onChange={(newValue) => {
								setDate(new Date(newValue).toLocaleDateString());
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</Grid>
				<Grid item xs={12} md={8}>
					<TableContainer component={Paper}>
						<Table size='small' aria-label='a dense table'>
							<TableHead>
								<TableRow>
									<TableCell align='left'>Schedule</TableCell>
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
												<TableCell align='left'>{appoinment?.time}</TableCell>
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
																{...register("visitStatus", {
																	required: true,
																})}>
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
									<TableRow
										sx={{ th: { color: "#2886FC", fontWeight: "bold" } }}>
										<TableCell align='left'>N/A</TableCell>
										<TableCell align='left'>N/A</TableCell>
										<TableCell align='left'>N/A</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
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
		</Container>
	);
};

export default Appoinments;
