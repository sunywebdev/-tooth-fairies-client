import { Container } from "@mui/material";
import React from "react";
import notFound from "../../images/404.png";

const NotFoundPage = () => {
	return (
		<Container sx={{mt:5}}>
			<img src={notFound} alt='' style={{ width:'100%',maxWidth:'500px' }} />
		</Container>
	);
};

export default NotFoundPage;
