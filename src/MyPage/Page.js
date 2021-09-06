import React from 'react'
import TableData from './TableData'
import { useDispatch } from 'react-redux'
import { setSerch } from './pageSlice'
import { useHistory } from 'react-router'


export default function Page() {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div style={{ backgroundColor: '#0693e3', marginTop: '0' }}>

            <div style={{ backgroundColor: '#00bcd4', display: 'flex', margin: '10px', padding: '10px', justifyContent: 'space-between' }}>
                <input placeholder='serchName'
                    onChange={(e) => dispatch(setSerch(e.target.value))} />
                < button onClick={() => history.push('/create')} > Create</button>
            </div>
            <div>
                <TableData />
            </div>
        </div>
    )
}
