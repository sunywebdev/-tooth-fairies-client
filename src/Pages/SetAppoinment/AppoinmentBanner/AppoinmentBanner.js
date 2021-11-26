import React from "react";
import bannerFg from "../../../images/chair.png";
import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const AppoinmentBanner = ({ date, setDate }) => {
	return (
		<Container>
			<Grid justifyContent='space-between' container spacing={0} sx={{ mt: 5 }}>
				<Grid item md={6} sx={{ textAlign: "left" }}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<StaticDatePicker
							displayStaticWrapperAs='desktop'
							value={date}
							onChange={(newValue) => {
								setDate(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</Grid>
				<Grid item md={6}>
					<img src={bannerFg} alt='' style={{ width: "100%" }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AppoinmentBanner;
