import { useNavigate } from "react-router-dom";

const TasksList = () => {
	const navigate = useNavigate();

	return (
		<div className=' h-[80%] w-[700px] pt-[90px] self-start mr-10 ml-10'>
			<h1 className='text-white text-2xl pt-5 font-bold tracking-wider'>
				Tasks
			</h1>
			<ul className='w-100%'>
				{/* {data.tasks.map(task => (
					<li
						key={task.id}
						className='p-4 flex bg-gray-800 justify-between items-center p-6 rounded-lg shadow-xl mt-8'>
						<div
							className='cursor-pointer'
							onClick={() => navigate(`tasks/${task.id}`)}>
							<h2 className='mb-2 font-bold text-xl text-slate-300'>
								{task.title}
							</h2>
						</div>
						<div>
							<button
								className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded'
								onClick={() => navigate(`/tasks/${task.id}/edit`)}>
								Edit
							</button>
							<button
								className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
								onClick={() => handleDelete(task.id)}>
								Delete
							</button>
						</div>
					</li>
				))} */}
			</ul>
		</div>
	);
};

export default TasksList;
