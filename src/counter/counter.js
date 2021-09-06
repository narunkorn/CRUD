import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    reset,
    multiply,
}
    from './counterSlice'

import { setfirstName, setlastName } from './inputSlice';
import { useHistory } from 'react-router';


export default function Counter() {
    const dispatch = useDispatch();
    const history = useHistory();
    const counter = useSelector((state) => state.counter.counter);


    const inputSubmit = (e) => {
        e.preventDefault();
        history.push('/inputlist');


    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}> My Counter    {counter}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(multiply())}>x</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
            <br />
            <form onSubmit={inputSubmit} >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>
                        <label>FirstName</label>
                        <input
                            type='text'
                            onChange={(e) => dispatch(setfirstName(e.target.value))} />
                    </p>

                    <p>
                        <label>LastName</label>
                        <input
                            type='text'
                            onChange={(e) => dispatch(setlastName(e.target.value))} />
                    </p>
                    <button type='submit'>Submit</button>

                </div>
            </form>



        </div>
    )
}
