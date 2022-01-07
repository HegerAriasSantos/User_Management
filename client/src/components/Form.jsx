import React from "react";

function Form(props) {
	const handleChange = e =>
		props.setTask({ ...props.task, [e.target.name]: e.target.value });
	return (
		<>
			<form>
				<div>
					<label htmlFor='title'>Titulo</label>
					<input
						type='text'
						id='title'
						value={props.task.title}
						name='title'
						onChange={e => handleChange(e)}
					/>
				</div>
				<div>
					<label htmlFor='description'>Description</label>
					<textarea
						type='text'
						id='description'
						value={props.task.description}
						onChange={e => handleChange(e)}
					/>
				</div>
			</form>
		</>
	);
}

export default Form;
