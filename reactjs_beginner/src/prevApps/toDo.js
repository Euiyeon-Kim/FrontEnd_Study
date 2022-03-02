import { useState, useEffect } from 'react'

function App() {
    const [toDo, setToDo] = useState('')
    const [toDos, setToDos] = useState([])

    const onSubmit = event => {
        event.preventDefault()
        if (toDo === '') {
            return
        }
        setToDos(curArr => [toDo, ...curArr])
        setToDo('')
    }
    const onChange = event => {
        setToDo(event.target.value)
    }
    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write what to do" />
                <button>Enter</button>
            </form>
            <hr />
            <ul>
                {toDos.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
