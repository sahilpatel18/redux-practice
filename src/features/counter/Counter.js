import react from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment, decrement} from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>counter</div>
    )
}