import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateTask = props => {
	const [task, setTask] = useState({
		title: "",
		description: "",
	});

	const [editing, setEditing] = useState(false);
	const navigate = useNavigate();
	const handleChange = e =>
		setTask({ ...task, [e.target.name]: e.target.value });
	const params = useParams();

	useEffect(() => {
		if (params.id) {
			LoadTask(params.id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.id]);

	const LoadTask = id => {
		axios
			.get(`http://localhost:3001/tasks/id/${id}`)
			.then(e => {
				setTask({
					title: e.data.body.title,
					description: e.data.body.description,
				});
			})
			.catch(e => {
				console.error(e);
			});
		setEditing(true);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		if (editing) {
			await axios
				.patch(`http://localhost:3001/tasks/${params.id}`, task)
				.then(e => {
					alert("Update successfully");
				})
				.catch(e => {
					console.error(e);
				});
		} else {
			await axios
				.post("http://localhost:3001/tasks/new", task)
				.then(e => {
					alert("Created successfully");
				})
				.catch(e => {
					console.error(e);
				});
		}

		navigate("/tasks");
	};

	return (
		<div className='bg-gray-800 w-[400px] h-[400px] mt-[92px] text-slate-300 p-10'>
			<h3 className='text-2xl font-bold text-center'>
				{editing === true ? "New task" : "Editing"}
			</h3>
			<form onSubmit={e => handleSubmit(e)}>
				<div className='mt-4'>
					<div>
						<label className='block' htmlFor='title'>
							Title
						</label>
						<input
							type='text'
							placeholder='Title'
							className='w-full px-4 py-2 mt-2  rounded-md focus:outline-none bg-gray-700'
							name='title'
							id='title'
							value={task.title}
							onChange={e => handleChange(e)}
						/>
					</div>
					<div className='mt-4'>
						<label htmlFor='description' className='block'>
							Description
						</label>
						<textarea
							value={task.description}
							onChange={e => handleChange(e)}
							type='text'
							name='description'
							placeholder='Description'
							id='description'
							className='w-full px-4 py-2 mt-2  rounded-md focus:outline-none bg-gray-700'
						/>
					</div>
					<div className='flex'>
						<button className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'>
							Create Account
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateTask;
