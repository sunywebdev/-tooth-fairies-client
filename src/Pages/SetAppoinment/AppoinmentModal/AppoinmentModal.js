import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../../context/useAuth";
import axios from "axios";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: 400,
	minWidth: 300,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
const AppoinmentModal = ({
	open,
	handleClose,
	booking,
	date,
	setMsgOpen,
	setOpen,
	setBookingSuccess,
}) => {
	const { user } = useAuth();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post("http://localhost:5000/appoinments", data)
			.then(function (response) {
				setOpen(false);
				setMsgOpen(true);
				setBookingSuccess(true);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={open}>
				<Box sx={style}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								"& > :not(style)": { m: 1 },
							}}>
							<input
								style={{
									pointerEvents: "none",
									border: 0,
									fontSize: "30px",
									textAlign: "center",
									backgroundColor: "transparent",
									color: "#2886FC",
								}}
								value={booking?.name}
								{...register("bookedAppoinment")}
							/>
							<TextField
								sx={{ bgcolor: "white" }}
								placeholder='date'
								value={date?.toLocaleDateString("en-GB")}
								{...register("date")}
							/>
							<TextField
								sx={{ bgcolor: "white" }}
								placeholder='Time'
								value={booking?.time}
								{...register("time")}
							/>
							<TextField
								sx={{ bgcolor: "white" }}
								placeholder='Your Name'
								value={user?.displayName}
								{...register("name")}
							/>
							<TextField
								sx={{ bgcolor: "white" }}
								value={user?.email}
								placeholder='Your Email'
								{...register("email")}
							/>
							<TextField
								sx={{ bgcolor: "white" }}
								placeholder='Phone Number'
								{...register("phone", { required: true })}
							/>

							<Button
								type='submit'
								variant='contained'
								sx={{ mt: 3, backgroundColor: "#2886FC" }}>
								Submit
							</Button>
						</Box>
					</form>
				</Box>
			</Fade>
		</Modal>
	);
};

export default AppoinmentModal;
