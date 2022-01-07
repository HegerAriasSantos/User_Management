import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import TasksList from "../views/TasksList";
import TaskForm from "../views/CreateTask";
import Menu from "../components/Navbar";
import Login from "./../views/Login";
import Register from "./../views/Register";
import Home from "./../views/Home";
import NotFound from "./../views/NotFound";
import Invited from "./../views/Invited";

function App() {
	const [pass, setPass] = useState(false);
	const [user, setUser] = useState();
	return (
		<BrowserRouter>
			{!pass ? (
				<Routes>
					<Route
						path='/login'
						element={<Login setPass={setPass} setUser={setUser} />}
					/>
					<Route
						path='/register'
						element={<Register setPass={setPass} setUser={setUser} />}
					/>
					<Route
						path='/invited'
						element={<Invited setPass={setPass} setUser={setUser} />}
					/>
					<Route index path='/' element={<Home />} />
					<Route path='*' element={<NotFound user={false} />} />
				</Routes>
			) : (
				<>
					<Menu setPass={setPass} />
					<div className='bg-gray-900 flex justify-center items-center  min-h-screen max-h-fit  relative order-1'>
						<Routes>
							<Route path='/tasks' element={<TasksList user={user} />} />
							<Route path='/tasks/new' element={<TaskForm user={user} />} />
							<Route
								path='/tasks/:id/edit'
								element={<TaskForm user={user} />}
							/>
							<Route path='*' element={<NotFound user={true} />} />
						</Routes>
					</div>
				</>
			)}
		</BrowserRouter>
	);
}

export default App;
