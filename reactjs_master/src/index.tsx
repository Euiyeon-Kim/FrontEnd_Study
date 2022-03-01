import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'

const darkTheme = {
    textcolor: 'whilesmoke',
    backgroundColor: '#111',
}
const whiteTheme = {
    textcolor: '#111',
    backgroundColor: 'whitesmoke',
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
