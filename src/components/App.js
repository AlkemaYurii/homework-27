import React from 'react'

const Header = (props) => {
    return <h1>Hello {props.title}</h1>
}
const App = () => {
    return (
        <>
            <Header title="it's Tourist Project" />
        </>
    )
}
export default App
