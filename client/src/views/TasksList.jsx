import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TasksList = props => {
	const navigate = useNavigate();
	const [tasks, setTasks] = useState([]);

	const handleDelete = id => {
		axios
			.delete(`http://localhost:3001/tasks/${id}`)
			.then(e => {
				alert("Delete successfully");
				setTasks(tasks.filter(e => e._id !== id));
			})
			.catch(() => {
				alert("Please try later");
			});
	};
	useEffect(() => {
		axios
			.get("http://localhost:3001/tasks")
			.then(e => {
				setTasks(e.data.body);
			})
			.catch(() => {
				// alert("there's not tasks");
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className=' h-[80%] w-[700px] pt-[90px] self-start mr-10 ml-10'>
			<h1 className='text-white text-2xl pt-5 font-bold tracking-wider'>
				Tasks
			</h1>
			<ul className='w-100%'>
				{tasks.length > 0 &&
					tasks.map(task => (
						<li
							key={task._id}
							className='p-4 flex bg-gray-800 justify-between items-center p-6 rounded-lg shadow-xl mt-8'>
							<div className='cursor-pointer'>
								<h2 className='mb-2 font-bold text-xl text-slate-300'>
									{task.title}
								</h2>
								<p className='text-slate-400'>{task.description}</p>
							</div>
							<div>
								<button
									className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded'
									onClick={() => navigate(`/tasks/${task._id}/edit`)}>
									Edit
								</button>
								<button
									className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
									onClick={() => handleDelete(task._id)}>
									Delete
								</button>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default TasksList;
