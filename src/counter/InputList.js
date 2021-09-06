import React from 'react'
import { useSelector } from 'react-redux';

export default function InputList() {
    const counter = useSelector((state) => state.counter.counter);
    const firstName = useSelector((state) => state.Myinput.input.firstName);
    const lastName = useSelector((state) => state.Myinput.input.lastName)
    return (
        <div>
            <h1>{counter}</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>


        </div>
    )
}
