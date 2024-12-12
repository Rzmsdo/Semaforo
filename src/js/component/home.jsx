
import React from "react";
import { useState } from "react";
//include images into your bundle




//create your first component
export function Home() {
	const [colorSemaforo, setcolorSemaforo] = useState("red");
	const colorAleatorio =["red", "yellow", "green"]
	let colorSeleccion= colorAleatorio[Math.floor(Math.random()*3)]
	return (
	<div className="container d-flex align-items-center justify-content-center">
		<button className="btn btn-primary" onClick= {()=>setcolorSemaforo(colorSeleccion)}  style={{width:"150px", height: "50px"}} >Change the color</button>
		<div className="Semaforo bg-black p-2 m-auto d-inline-block">
			<div className={`luz mb-1 bg-danger ${colorSemaforo === "red" ? "glow" : ""}`} onClick={() => setcolorSemaforo("red")}></div>
			<div className={`luz mb-1 bg-warning ${colorSemaforo === "yellow" ? "glow" : ""}`} onClick={() => setcolorSemaforo("yellow")}></div>
			<div className={`luz mb-1 bg-success ${colorSemaforo === "green" ? "glow" : ""}`} onClick={() => setcolorSemaforo("green")}></div>
		</div>
	</div>);
}

export default Home;
