import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="border-bottom">
			<nav className="navbar navbar-expand-lg container">
				<div className="container-fluid">
					<Link
						to="/"
						className="navbar-brand d-flex align-items-center text-dark text-decoration-none gap-3"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/UNMSM_escudo_XVI-XXI_transparente_siglas_nombre_vertical.svg/1200px-UNMSM_escudo_XVI-XXI_transparente_siglas_nombre_vertical.svg.png"
							alt="logo"
							width="30"
						/>
						<span className="fs-4">EF-Mineria Datos G13</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="test">
									Test
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
