import { useState } from 'react'

function App() {
    const [counter, setCounter] = useState(0)
    const onClick = () => setCounter(cur => cur + 1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

export default App
