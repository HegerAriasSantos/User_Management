import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
	return (
		<div className='flex items-center justify-center flex-col  min-h-screen bg-gray-100'>
			<strong className='text-3xl'>Not Found.</strong>
			please go back
			<hr />
			<p>
				<Link
					className='text-cyan-500'
					to={props.user === true ? "/tasks" : "/"}>
					{" "}
					Click me{" "}
				</Link>
			</p>
		</div>
	);
}

export default NotFound;
