import styled from 'styled-components'

const Cont = styled.div`
    display: flex;
`
const Box = styled.div`
    background-color: ${props => props.bgColor};
    width: 100px;
    height: 100px;
`

const Circle = styled(Box)`
    border-radius: 50px;
`

const Inputs = styled.input.attrs({ required: true, minLength: 10 })`
    background-color: plum;
`

function App() {
    return (
        <Cont>
            <Inputs></Inputs>
        </Cont>
    )
}

export default App
