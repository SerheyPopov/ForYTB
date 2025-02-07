import fb3 from "../image/dev_hawks_done-04.png";

const StartPage = ({ catName }) => {
	return (
		<div className="flex justify-center ">
			<div className="mt-60 bg-white p-10 border-4 rounded-md border-blue-500 shadow-lg">
				<h1 className="text-center text-3xl text-gray-700 mb-5">
					Congratulations <span className="font-bold text-blue-500 ">{catName?.name}</span> !!
				</h1>
				<img src={fb3} alt="logo" width={360} height={80} />
			</div>
		</div>
	);
};

export default StartPage;
