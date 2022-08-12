import React, { useEffect, useState } from "react";

const TrafficLight = () => {

	const [activeLight, setActiveLight] = useState('red');
	const [hideLight, setHideLight] = useState(true);


	useEffect(() => {

		const red = document.getElementById('red');
		const orange = document.getElementById('orange');
		const green = document.getElementById('green');
		const pink = document.getElementById('pink');

		switch(activeLight){
			case 'red':
				red.classList.toggle('red-shine');
				break;
			case 'orange':
				orange.classList.toggle('orange-shine');
				break;
			case 'green':
				green.classList.toggle('green-shine');
				break;
			case 'pink':
				pink.classList.toggle('pink-shine');
				break;
			default:
				break;
		};
	}, [activeLight])

	const handleEvents = (light) =>{
		setActiveLight(light);
	};

	return (
		<div className="wrapper">
			<div className="traffic_light_container">
					<div id="red" onClick={ () => handleEvents('red') } className="light red"></div>
					<div id="orange" onClick={ () => handleEvents('orange') } className="light orange"></div>
					<div id="green" onClick={ () => handleEvents('green') } className="light green"></div>
					{
						hideLight ? null : <div id="pink" onClick={ () => handleEvents('pink') } className="light pink"></div>
					}
					
			</div>
			<div className="buttons_container">
				<button onClick={ () => setHideLight(false) } className="button">Show</button>
				<button onClick={ () => setHideLight(true) } className="button">Hide</button>
			</div>
		</div>
	);
};

export default TrafficLight;
