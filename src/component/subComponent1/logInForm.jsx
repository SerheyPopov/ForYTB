import { useState } from "react";

const LoginForm = ({ login }) => {
	const [catData, setCatData] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		login(catData);
	};

	const onChangeInput = (e) => {
		const { id, value } = e.target;
		setCatData((prevCatData) => ({ ...prevCatData, [id]: value }));
	};

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-slate-200 p-10 bg-opacity-90 mt-40 rounded-lg">
				<h1 className="text-3xl mb-10 font-bold text-center text-blue-500 "> Cats Toys</h1>
				<form className="flex flex-col items-center gap-5" onSubmit={handleSubmit}>
					<input
						type="text"
						className="w-60 h-10 border-2 border-blue-500 rounded-md outline-none p-2"
						onChange={onChangeInput}
						placeholder="name"
						id="name"
					/>
					<input
						type="password"
						className="w-60 h-10 border-2 border-blue-500 rounded-md outline-none p-2"
						onChange={onChangeInput}
						placeholder="Password"
						id="pass"
					/>
					<button className="w-40 h-10 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-700">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
