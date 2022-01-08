import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export default function ButtonAppBar(props) {
	const navigate = useNavigate();
	useEffect(() => {
		if (props.user.isInvited) {
			setTimeout(() => {
				props.setPass(false);
				alert("Time over, you have to sign in");
				navigate("/");
			}, 1800000);
			setTimeout(() => {
				alert("Only have 5m more");
			}, 1500000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='bg-gray-800 pr-10 shadow-xl fixed top-0 left-0 right-0 z-10'>
				<div className='flex justify-between items-center p-5'>
					<div>
						<Link className='text-white text-lg' to='/tasks'>
							Prueba tecnica
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
