import React, { useId } from "react";

function SelectForm({
	label,
	name,
	placeholder = "Seleccione una opción",
	options = [],
	form,
	handleChange,
}) {
	const id = useId();
	return (
		<div className="col-12">
			<label htmlFor={id} className="form-label">
				{label}
			</label>
			<select
				id={id}
				className="form-select"
				name={name}
				onChange={handleChange}
				value={form[name]}
				required
			>
				<option disabled value="">
					{placeholder}
				</option>
				{options.map((e, i) => (
					<option key={i} value={e.value}>
						{e.label}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectForm;
