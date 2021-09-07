import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const TableData = () => {
    const classes = useStyles();
    const history = useHistory()
    const [datas, setDatas] = useState([]);
    const serch = useSelector(state => state.page.input.serch);

    const fetchData = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_CALL_API}/api/users`);
            let myData = await res.json()
            setDatas(myData);
            
            console.log(myData);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    const filterInputSerch = datas.filter((data) => {
        return data.fname.toLowerCase().includes(serch.toLowerCase());
    })
    const deleteUser = async (id) => {
        const datasDelete = {
            'id': id,
        }
        let res = await fetch(`${process.env.REACT_APP_CALL_API}/api/users/delete`, {
            method: 'DELETE',
            body: JSON.stringify(datasDelete),
            headers: { "content-type": "application/json" }
        })
        if (res.ok) {
            history.push('/page');
            fetchData()
        } else {
            console.log("error");
        }
    }

    const editUser = (id) => {
        history.push('/editUser/' + id)
    }
    return (
        <div style={{ padding: '20px' }}>
            <TableContainer component={Paper} >
                <Table className={classes.table} size="small" aria-label="a dense table" >
                    <TableHead>
                        <TableRow>
                            <TableCell >id</TableCell>
                            <TableCell align="center" >img</TableCell>
                            <TableCell align="center">firstName</TableCell>
                            <TableCell align="center">lastName</TableCell>
                            <TableCell align="center">username</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterInputSerch.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell component="th" scope="row">
                                    {data.id}
                                </TableCell>
                                <TableCell align="center">
                                    <Avatar alt="Travis Howard" src={data.avatar} />
                                </TableCell>
                                <TableCell align="center">{data.fname}</TableCell>
                                <TableCell align="center">{data.lname}</TableCell>
                                <TableCell align="center">{data.username}</TableCell>
                                <TableCell align="center">
                                    <button onClick={() => deleteUser(data.id)}>Delete</button>
                                    <button onClick={() => editUser(data.id)}>Edit</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
export default TableData;
