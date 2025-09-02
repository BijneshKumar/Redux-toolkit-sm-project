import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increaseby1,decreaseby1} from '../redux/counterSlice'

const Counter = () => {
    const count = useSelector((state)=> state.counterSuperman)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increaseby1())}>increase by one</button>
        <button onClick={()=> dispatch(decreaseby1())}>decrease by one</button>
    </div>
  )
}

export default Counter