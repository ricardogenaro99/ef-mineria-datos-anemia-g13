import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #0000007a;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;

  #loader{
    transform: scale(3);
  }
`;

function Loader() {
	return (
		<Container>
			<div className="spinner-grow bg-warning" role="status" id="loader">
				<span className="visually-hidden">Loading...</span>
			</div>
		</Container>
	);
}

export default Loader;
