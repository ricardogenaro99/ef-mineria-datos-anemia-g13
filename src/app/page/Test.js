import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Card, InputForm, Loader, SelectForm } from "../components";

const initialForm = {
	EdadMeses: "",
	Sexo: "",
	Peso: "",
	Talla: "",
	Hemoglobina: "",
	Suplementacion: "",
	AlturaREN: "",
	HBC: "",
};

const initResult = {
	predicted_Dx_Anemia: "Anemia Leve",
	probability: "1",
	probability_Normal: "",
	probability_Anemia_Leve: "1",
	probability_Anemia_Moderada: "",
	probability_Anemia_Severa: "",
	node_id: "",
};
function Test() {
	const [form, setForm] = useState(initialForm);
	const [result, setResult] = useState();
	const [loading, setLoading] = useState(false);

	const config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
			"Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
			"Access-Control-Allow-Headers":
				"Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
		},
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			setLoading(true);
			const { data } = await axios.post(
				"https://serverless.clouderizer.com/function/unmsm-ef-mineria-datos-anemia-g13/predict",
				form,
				config,
			);

			const [
				predicted_Dx_Anemia,
				probability,
				probability_Normal,
				probability_Anemia_Leve,
				probability_Anemia_Moderada,
				probability_Anemia_Severa,
				node_id,
			] = data.data.at(0).output;

			setResult({
				predicted_Dx_Anemia,
				probability,
				probability_Normal,
				probability_Anemia_Leve,
				probability_Anemia_Moderada,
				probability_Anemia_Severa,
				node_id,
			});
		} catch (error) {
			setResult(initResult);
			// toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const props = { form, handleChange };

	return (
		<>
			<div className="row m-0 p-0 g-3">
				<form className="col-md-6 row g-3" onSubmit={handleSubmit}>
					<InputForm label="Edad en meses" name="EdadMeses" {...props} />
					<SelectForm
						label="Sexo"
						name="Sexo"
						{...props}
						options={[
							{ label: "Masculino", value: "1" },
							{ label: "Femenino", value: "0" },
						]}
					/>
					<InputForm label="Peso" name="Peso" {...props} />
					<InputForm label="Talla" name="Talla" {...props} />
					<InputForm label="Hemoglobina" name="Hemoglobina" {...props} />
					<SelectForm
						label="Suplementacion"
						name="Suplementacion"
						{...props}
						options={[
							{ label: "Si", value: "1" },
							{ label: "No", value: "0" },
						]}
					/>
					<InputForm label="Altura REN" name="AlturaREN" {...props} />
					<InputForm label="HBC" name="HBC" {...props} />
					<div className="col-12">
						<button type="submit" className="btn btn-primary">
							Enviar
						</button>
					</div>
				</form>
				<div className="col-md-6 px-5">
					{<Card {...result} />}
				</div>
			</div>
			{loading && <Loader />}
		</>
	);
}

export default Test;
