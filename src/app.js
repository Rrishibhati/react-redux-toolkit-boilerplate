import { Outlet, useNavigation } from "react-router-dom"

const App = () => {
    const { state } = useNavigation()

    return (
        <div className="app-container">
            <p>Header</p>
            { state === 'loading' ? 'loading....' : <Outlet /> }
            <p>Footer</p>
        </div>
    )
}

export default App