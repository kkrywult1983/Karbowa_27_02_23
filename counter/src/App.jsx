import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	localStorage.setItem('counter', count)

	return (
		<div className='App'>
			<div className='card'>
				<h1>{count}</h1>
				<button onClick={() => setCount(count => count - 1)}>Click Me "-"</button>
				<button onClick={() => setCount(count => count + 1)}>Click Me "+"</button>
				<button onClick={() => setCount(count => (count = 0))}>Clear counter</button>
			</div>
		</div>
	)
}

export default App
