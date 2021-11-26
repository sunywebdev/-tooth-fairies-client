import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../context/useAuth";
import { LinearProgress, Stack } from "@mui/material";

const PrivateRoute = ({ children, ...rest }) => {
	let { user, isLoading } = useAuth();
	if (isLoading) {
		return (
			<Stack sx={{ width: "100%", color: "grey.500", my: 9 }} spacing={2}>
				<LinearProgress color='secondary' />
				<LinearProgress color='success' />
				<LinearProgress color='inherit' />
			</Stack>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/Login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};
export default PrivateRoute;
