import React from "react";

import { Link } from "react-router-dom";

function BackArrow() {
	return (
		<Link
			className='fixed top-0 left-0  text-bold text-lg text-blue-600'
			to='/'>
			Go back
		</Link>
	);
}

export default BackArrow;
