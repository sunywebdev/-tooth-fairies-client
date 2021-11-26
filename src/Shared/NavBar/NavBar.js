import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem, MenuList, Typography } from "@mui/material";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const NavBar = () => {
	const { user, logOut } = useAuth();
	console.log(user);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: "#2886FC" }}>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Typography
						variant='h6'
						component='div'
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'>
						<Link
							style={{ textDecoration: "none", color: "white" }}
							sx={{ my: 1 }}
							exact
							to='/'>
							Doctors Portal
						</Link>
					</Typography>
					<Box>
						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}>
							<Link
								style={{ textDecoration: "none", color: "black" }}
								to='/appoinments'>
								<MenuItem onClick={handleClose}>Appoinments</MenuItem>
							</Link>
							<Link
								style={{ textDecoration: "none", color: "black" }}
								sx={{ my: 1 }}
								exact
								to='/dashboard'>
								<MenuItem onClick={handleClose}>Dashboard</MenuItem>
							</Link>
							<MenuItem onClick={(handleClose, logOut)}>Logout</MenuItem>
						</Menu>
						{user?.email && (
							<Button
								sx={{ color: "white" }}
								aria-controls='basic-menu'
								aria-haspopup='true'
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}>
								{user?.photoURL === null ? (
									<AccountCircleIcon></AccountCircleIcon>
								) : (
									<img
										src={user?.photoURL}
										alt=''
										width='35'
										height='35'
										style={{ borderRadius: "50%", border: "3px solid white" }}
									/>
								)}
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
