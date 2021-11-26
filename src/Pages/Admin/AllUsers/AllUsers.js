import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div>
			<Grid item xs={12} md={12}>
				<TableContainer component={Paper}>
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow sx={{ th: { color: "#2886FC", fontWeight: "bold" } }}>
								<TableCell align='left'>Photo</TableCell>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='left'>Email</TableCell>
								<TableCell align='left'>Gender</TableCell>
								<TableCell align='left'>Age</TableCell>
								<TableCell align='left'>Weight</TableCell>
								<TableCell align='left'>Contact</TableCell>
								<TableCell align='left'>Address</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{users.length > 0 ? (
								<>
									{users.map((user) => (
										<TableRow
											key={user?._id}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}>
											<TableCell component='th' scope='row'>
												<img
													src={user?.photoURL || "N/A"}
													alt=''
													width='25px'
													height='25px'
													style={{ borderRadius: "50%" }}
												/>
											</TableCell>
											<TableCell align='left'>
												{user?.displayName || "N/A"}
											</TableCell>
											<TableCell align='left'>{user?.email || "N/A"}</TableCell>
											<TableCell align='left'>
												{user?.gender || "N/A"}
											</TableCell>
											<TableCell align='left'>{user?.age || "N/A"}</TableCell>
											<TableCell align='left'>
												{user?.weight || "N/A"}
											</TableCell>
											<TableCell align='left'>
												{user?.contact || "N/A"}
											</TableCell>
											<TableCell align='left'>
												{user?.address || "N/A"}
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
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</div>
	);
};

export default AllUsers;
