import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./App.css";
import HomeMain from "./Pages/Home/HomeMain/HomeMain";
import AppoinmentMain from "./Pages/SetAppoinment/AppoinmentMain/AppoinmentMain";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import DashboardHome from "./Pages/Admin/DashboardHome/DashboardHome";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<HomeMain></HomeMain>
						</Route>
						<PrivateRoute path='/appoinments'>
							<AppoinmentMain></AppoinmentMain>
						</PrivateRoute>
						<PrivateRoute path='/dashboard'>
							<DashboardHome></DashboardHome>
						</PrivateRoute>
						<Route path='/login'>
							<Login></Login>
						</Route>
						<Route path='/signup'>
							<SignUp></SignUp>
						</Route>
						<Route path='/resetpassword'>
							<ResetPassword></ResetPassword>
						</Route>
						<Route path='*'>
							<NotFoundPage></NotFoundPage>
						</Route>
					</Switch>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
