import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Appoinments from "../Appoinments/Appoinments";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AllUsers from "../AllUsers/AllUsers";
import PageRols from "../PageRols/PageRols";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import AllAppoinments from "../AllAppoinments/AllAppoinments";
import useAuth from "../../../context/useAuth";
import AdminRoute from "../../../AdminRoute/AdminRoute";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import UpdateIcon from "@mui/icons-material/Update";

const drawerWidth = 240;

function DashboardHome(props) {
	const { admin } = useAuth();
	let { path, url } = useRouteMatch();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Button sx={{ my: 1.8, backgroundColor: "#2886FC" }} variant='contained'>
				<Link style={{ textDecoration: "none", color: "white" }} exact to='/'>
					Home Page
				</Link>
			</Button>

			<Divider />
			<List>
				<Link
					style={{ textDecoration: "none", color: "black" }}
					exact
					to={`${url}`}>
					<ListItem button>
						<ListItemIcon>
							<ListAltIcon />
						</ListItemIcon>
						<ListItemText primary={"My Appoinments"} />
					</ListItem>
				</Link>
				<Link
					style={{ textDecoration: "none", color: "black" }}
					exact
					to={`${url}/updateProfile`}>
					<ListItem button>
						<ListItemIcon>
							<UpdateIcon />
						</ListItemIcon>
						<ListItemText primary={"Update Profile"} />
					</ListItem>
				</Link>
				<Divider />
				{admin && (
					<Box>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							exact
							to={`${url}/allAppoinments`}>
							<ListItem button>
								<ListItemIcon>
									<ListAltIcon />
								</ListItemIcon>

								<ListItemText primary={"All Appoinments"} />
							</ListItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							exact
							to={`${url}/allUsers`}>
							<ListItem button>
								<ListItemIcon>
									<GroupIcon />
								</ListItemIcon>

								<ListItemText primary={"All Users"} />
							</ListItem>
						</Link>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							exact
							to={`${url}/pageRoles`}>
							<ListItem button>
								<ListItemIcon>
									<AdminPanelSettingsIcon />
								</ListItemIcon>

								<ListItemText primary={"Page Roles"} />
							</ListItem>
						</Link>
					</Box>
				)}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px`, backgroundColor: "#2886FC" },
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						User Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				<Switch>
					<Route exact path={path}>
						<Appoinments></Appoinments>
					</Route>
					<Route exact path={`${path}/updateProfile`}>
						<UpdateProfile></UpdateProfile>
					</Route>
					<AdminRoute path={`${path}/allAppoinments`}>
						<AllAppoinments></AllAppoinments>
					</AdminRoute>
					<AdminRoute path={`${path}/allUsers`}>
						<AllUsers></AllUsers>
					</AdminRoute>
					<AdminRoute path={`${path}/pageRoles`}>
						<PageRols></PageRols>
					</AdminRoute>
				</Switch>
			</Box>
		</Box>
	);
}

DashboardHome.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default DashboardHome;
