import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register(props) {
	const [form, setForm] = useState({
		name: "",
		password: "",
		repeatPassword: "",
	});
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value });
	const handleSubmit = e => {
		e.preventDefault();
		if (form.password !== form.repeatPassword) {
			setError("Password must be same!");
			return;
		}
		setError("");
		let user = { name: form.name, password: form.password };
		axios
			.post("http://localhost:3001/user/register", user)
			.then(e => {
				props.setPass(true);
				let { name, token } = e.data.body;
				props.setUser({ name, token });
				alert("Bienvenido");
				navigate("/tasks");
			})
			.catch(e => {
				setError(e);
				alert("That users already exists!  Please Sign in ");
			});
	};
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
				<h3 className='text-2xl font-bold text-center'>Join us</h3>
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
						<div className='mt-4'>
							<label htmlFor='rPassword' className='block'>
								Confirm Password
							</label>
							<input
								id='rPassword'
								name='repeatPassword'
								value={form.repeatPassword}
								onChange={e => handleChange(e)}
								type='password'
								placeholder='Password'
								className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
							/>
						</div>
						{error.length > 0 && (
							<span className='text-xs text-red-400'>{error}</span>
						)}
						<div className='flex'>
							<button className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'>
								Create Account
							</button>
						</div>
						<div className='mt-6 text-grey-dark'>
							Already have an account?
							<Link className='text-blue-600 hover:underline' to='/login'>
								Log in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
