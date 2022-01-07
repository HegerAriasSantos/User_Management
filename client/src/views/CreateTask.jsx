import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateTask = () => {
	const [task, setTask] = useState({
		title: "",
		description: "",
	});
	const [Loading, setLoading] = useState(false);
	const [editing, setEditing] = useState(false);
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (params.id) {
			// GetTask({ variables: { id: params.id } });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.id]);

	// const LoadTask = id => {
	// 	// loading === true ?? LoadTask(id);
	// 	if (data.task) {
	// 		console.log("There are data");
	// 	}
	// 	setTask({ title: data.title, description: data.description });
	// 	console.log(task);
	// 	setEditing(true);
	// };

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			if (editing) {
			} else {
			}

			setLoading(false);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='bg-gray-800 w-[400px] h-[400px] mt-[92px] '>
			{task.title}
		</div>
	);
};

export default CreateTask;
