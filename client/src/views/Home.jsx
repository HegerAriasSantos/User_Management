import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
				<div className='text-2xl font-bold text-center m-8'>Bienvenido</div>
				<div className='flex items-center justify-between mr-10 ml-10 mb-10 text-blue-800'>
					<Link
						className='text-center block  rounded py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white'
						to='/login'>
						Login
					</Link>
					<Link
						className='text-center block  rounded py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white'
						to='/register'>
						register
					</Link>
				</div>
				<div className='text-center text-blue-800'>
					<Link
						className='text-center block  rounded py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white'
						to='Invited'>
						Sing in like a Invited
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
