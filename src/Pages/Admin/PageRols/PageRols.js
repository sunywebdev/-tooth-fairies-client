import {
	Alert,
	Autocomplete,
	Button,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
	TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";

const PageRols = () => {
	const { token } = useAuth();
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	const [open, setOpen] = React.useState(false);
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.put(`http://localhost:5000/users/pageRole`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(function (response) {
				setOpen(true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ textAlign: "left", mx: "auto", my: { xs: 5 } }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							"& > :not(style)": { m: 1 },
						}}>
						<Autocomplete
							freeSolo
							id='free-solo-2-demo'
							disableClearable
							options={users.map((user) => user?.email)}
							renderInput={(params) => (
								<TextField
									{...register("email", { required: true })}
									{...params}
									label='Search Users'
									InputProps={{
										...params.InputProps,
										type: "search",
									}}
								/>
							)}
						/>
						<FormControl>
							<InputLabel id='demo-simple-select-autowidth-label'>
								Roles
							</InputLabel>
							<Select
								labelId='demo-simple-select-autowidth-label'
								id='demo-simple-select-autowidth'
								autoWidth
								label='Roles'
								{...register("userRole", { required: true })}>
								<MenuItem value='Admin'>Admin</MenuItem>
								<MenuItem value='User'>User</MenuItem>
							</Select>
						</FormControl>
						<Button
							type='submit'
							variant='contained'
							sx={{ backgroundColor: "#2886FC" }}>
							Change Role
						</Button>
					</Box>
				</Grid>
			</form>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					variant='filled'
					sx={{ width: "100%", backgroundColor: "#2886FC" }}>
					Page Role Changed Successfully !
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default PageRols;
