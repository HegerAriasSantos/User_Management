import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
	const [form, setForm] = useState({
		name: "",
		password: "",
	});
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value });
	const handleSubmit = e => {
		e.preventDefault();
		console.log("hola");
		setError("");
		let user = { name: form.name, password: form.password };
		axios
			.post("http://localhost:3001/user/login", user)
			.then(e => {
				console.log(e);
				props.setPass(true);
				alert("welcome");
				navigate("/tasks");
			})
			.catch(e => {
				setError("That name is being use!  Please Sign up ");
				alert("That name is being use!  Please Sign up ");
			});
	};
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
				<h3 className='text-2xl font-bold text-center'>Welcome</h3>
				<form onSubmit={e => handleSubmit(e)}>
					<div className='mt-4'>
						<div>
							<label className='block' htmlFor='Name'>
								Name
							</label>
							<input
								type='text'
								placeholder='Name'
								className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
								name='name'
								id='Name'
								value={form.name}
								onChange={e => handleChange(e)}
							/>
						</div>
						<div className='mt-4'>
							<label htmlFor='Password' className='block'>
								Password
							</label>
							<input
								value={form.password}
								onChange={e => handleChange(e)}
								type='password'
								name='password'
								placeholder='Password'
								id='Password'
								className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
							/>
						</div>

						{error === "Password isn't equal" && (
							<span className='text-xs text-red-400'>
								Password must be same!
							</span>
						)}
						<div className='flex'>
							<button className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'>
								Create Account
							</button>
						</div>
						<div className='mt-6 text-grey-dark'>
							don't have you a account yet ?
							<Link className='text-blue-600 hover:underline' to='/register'>
								{" "}
								Sign in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
