import { useState, useEffect } from 'react'

function Hello() {
    useEffect(() => {
        console.log('I created :)')
        return () => console.log('I destroyed :(')
    }, [])

    return <h1>HELLO!</h1>
}

function App() {
    const [isShowing, setIsShowing] = useState(true)
    const onClick = () => setIsShowing(cur => !cur)
    return (
        <div>
            {isShowing ? <Hello /> : null}
            <button onClick={onClick}>{isShowing ? 'SHOW' : 'HIDE'}</button>
        </div>
    )
}

export default App
