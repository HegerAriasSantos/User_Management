import { useNavigate, Link } from "react-router-dom";

export default function ButtonAppBar() {
	const navigate = useNavigate();
	return (
		<>
			<div className='bg-gray-800 pr-10 shadow-xl fixed top-0 left-0 right-0 z-10'>
				<div className='flex justify-between items-center p-5'>
					<div>
						<Link to='/' style={{ textDecoration: "none", color: "#eee" }}>
							PERN Stack With Graphql
						</Link>
					</div>
					<button
						className='text-center block  rounded py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white'
						onClick={() => navigate("/tasks/new")}>
						New Task
					</button>
				</div>
			</div>
		</>
	);
}
