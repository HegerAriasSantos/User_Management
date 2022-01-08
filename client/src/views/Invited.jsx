import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../components/BackArrow";

function Invited(props) {
	const [user, setUser] = useState();
	const [id, setId] = useState(1);
	let navigate = useNavigate();
	const handleChangeUser = () => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(e => {
				console.log(e.data);
				setUser(e.data);
			})
			.catch(e => console.log(e));
	};
	useEffect(() => {
		handleChangeUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<BackArrow />;
			{id !== 1 && (
				<button
					onClick={() => {
						setId(id - 1);
					}}
					className=' font-bold mr-10 text-blue-600 hover:text-blue-900'>
					{"<"}-- Before
				</button>
			)}
			<div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
				<h1 className='font-bold text-lg'>Choose your temporal User </h1>
				<div className='mt-10 mb-10'>
					<label className='font-bold'>Name: </label>
					{user && <p>{user.name}</p>}
				</div>
				<div className='w-[100%] flex items-center justify-center'>
					<button
						type='button'
						className=' text-center block  rounded py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white'
						onClick={() => {
							axios
								.post("http://localhost:3001/user/login", {
									isInvited: true,
									name: user.name,
								})
								.then(e => {
									let invited = { ...e.data.body, isInvited: true };
									props.setUser(invited);
									console.log(e.data.body);
									props.setPass(true);
									alert("welcome");
									navigate("/tasks");
								});
						}}>
						Sign in temporaly (30m)
					</button>
				</div>
			</div>
			{id !== 10 && (
				<button
					onClick={() => {
						setId(id + 1);
					}}
					className=' font-bold ml-10 text-blue-600 hover:text-blue-900'>
					Next --{">"}
				</button>
			)}
		</div>
	);
}

export default Invited;
