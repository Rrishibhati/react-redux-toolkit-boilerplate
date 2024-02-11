import { useDispatch, useSelector } from 'react-redux'
import './home.scss'

import { setCounter } from './counterSlice'

const Home = () => {

    const counter = useSelector(store => store.counter.count)
    const dispatch = useDispatch()
    const handleSetCounter = param => dispatch(setCounter(param))

    return (
        <>
            <h1>Manage Counter</h1>
            <div className="counter-conatainer">
                <button onClick={() => handleSetCounter('increment')} >+</button>
                <div className="counter-value">{counter}</div>
                <button onClick={() => handleSetCounter('decrement')}>-</button>
            </div>
        </>
    )
}

export default Home