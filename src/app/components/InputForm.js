import React, { useId } from "react";

function InputForm({
	label,
	name,
	placeholder,
	type = "number",
	form,
	handleChange,
	min = 0,
}) {
	const id = useId();
	return (
		<div className="col-12">
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<input
				type={type}
				className="form-control"
				id={id}
				placeholder={placeholder}
				name={name}
				value={form[name]}
				onChange={handleChange}
				required
				step="0.00001"
				min={min}
			/>
		</div>
	);
}

export default InputForm;
