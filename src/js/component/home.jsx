import React, { useState } from "react";


//create your first component
const Home = () => {
	const [currentColor, setcurrentColor] = useState("red")

	return (
		<div className="text-center mx-auto">
			<div className="tube mx-auto"></div>
			<div className="lightbox mx-auto">
				<div className= {currentColor ==="red" ? "red light glow" : "red light" } onClick={()=>setcurrentColor("red")}></div>
				<div className= {currentColor ==="yellow" ? "yellow light glow" : "yellow light" } onClick={()=>setcurrentColor("yellow")}></div>
				<div className= {currentColor ==="green" ? "green light glow" : "green light" } onClick={()=>setcurrentColor("green")}></div>
		</div>
		</div>
				
	
	);
};

export default Home;