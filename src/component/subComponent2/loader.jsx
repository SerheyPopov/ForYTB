import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const formatTime = (value) => (value < 10 ? `0${value}` : value);
	return (
		<div className="bg-slate-800 h-screen w-screen">
			<div className="flex flex-col items-center justify-center h-screen text-white">
				<div className="p-8 bg-slate-400 rounded-xl">
					<div className="text-9xl font-bold rounded-xl tracking-widest bg-slate-800 flex">
						<div className="m-8">
							{formatTime(time.getHours())}:{formatTime(time.getMinutes())}:
							{formatTime(time.getSeconds())}
						</div>
						<div className="text-2xl border-l-8 border-slate-400 text-gray-300 p-7 w-40">
							{time.toDateString()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DigitalClock;
