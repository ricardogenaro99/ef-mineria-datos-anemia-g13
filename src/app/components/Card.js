import React from "react";

function Card({
	predicted_Dx_Anemia,
	probability,
	probability_Normal,
	probability_Anemia_Leve,
	probability_Anemia_Moderada,
	probability_Anemia_Severa,
	node_id,
}) {
	return (
		<div className="card">
			<h5 className="card-header">Resultado</h5>
			<div className="card-body">
				<h5 className="card-title">Predicción: {predicted_Dx_Anemia}</h5>
				<h6 className="card-title">Probabilidad: {probability}</h6>
				<h6 className="card-title">Otras probabilidades:</h6>
				<ul className="card-text">
					<li>
						Probabilidad Anemia (Normal): <b>{probability_Normal}</b>
					</li>
					<li>
						Probabilidad Anemia (Leve): <b>{probability_Anemia_Leve}</b>
					</li>
					<li>
						Probabilidad Anemia (Moderada): <b>{probability_Anemia_Moderada}</b>
					</li>
					{/* <li>
						Probabilidad Anemia Severa: <b>{probability_Anemia_Severa}</b>
					</li> */}
				</ul>
			</div>
		</div>
	);
}

export default Card;
