import React, { useState } from "react"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)
	const decrement = () => setCount(count - 1)
	const increment = () => setCount(count + 1)
	const resetCount = () => setCount(0)
	let color = count < 0 ? "red" : count > 0 ? "green" : "white"

	return (
		<div className="container">
			<div className="title">
				<h1>Counter</h1>
			</div>
			<div className="number">
				<h1 id="value" style={{ color }}>
					{count}
				</h1>
			</div>
			<div className="btn-group">
				<button className="decrease btn button-6" onClick={decrement}>
					Decrease
				</button>
				<button className="reset btn button-6" onClick={resetCount}>
					Reset
				</button>
				<button className="increase btn button-6" onClick={increment}>
					Increase
				</button>
			</div>
		</div>
	)
}

export default App
