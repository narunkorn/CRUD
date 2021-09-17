import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFname, setLname, setUsername, setEmail, setAvatar } from './pageSlice'



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function EditUser() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const fname = useSelector(state => state.page.input.fname)
    const lname = useSelector(state => state.page.input.lname)
    const username = useSelector(state => state.page.input.username)
    const email = useSelector(state => state.page.input.email)
    const avatar = useSelector(state => state.page.input.avatar)


    const fetchEditData = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_CALL_API}/api/users/` + id)
            let mydata = await res.json()
            console.log('data',mydata.user)
            dispatch(setFname(mydata.user.fname)) ;
           dispatch(setLname(mydata.user.lname)) ;
           dispatch(setUsername(mydata.user.username)) ;
           dispatch(setEmail(mydata.user.email)) ;
           dispatch(setAvatar(mydata.user.avatar)) ;
        } catch (err) {
            console.log(err);
        }

    }
   
    useEffect(() => {
        fetchEditData();
    },[]);

    const userUpdate = async () => {
        const dataUpdate = {
            'id': id,
            'fname': fname,
            'lname': lname,
            'username': username,
            'email': email,
            'avatar': avatar
        }
        let res = await fetch(`${process.env.REACT_APP_CALL_API}/api/users/update`, {
            method: 'PUT',
            body: JSON.stringify(dataUpdate),
            headers: { "content-type": "application/json" }
        });
        if (res.ok) {
            history.push('/page');
        }
        else {
            console.log('err');
        }
    }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        userUpdate();

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    EditUser
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleEditSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={fname}
                                onChange={(e) => dispatch(setFname(e.target.value))}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={lname}
                                onChange={(e) => dispatch(setLname(e.target.value))}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => dispatch(setEmail(e.target.value))}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="username"
                                label="username"
                                id="username"
                                value={username}
                                onChange={(e) => dispatch(setUsername(e.target.value))}

                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="avatar"
                                label="avatar"
                                id="avatar"
                                value={avatar}
                                onChange={(e) => dispatch(setAvatar(e.target.value))}

                            />
                        </Grid> */}

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Ok
                    </Button>
                    <Button

                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => history.push('/page')}
                    >
                        Cancle
                    </Button>

                </form>
            </div>
        </Container>
    );
}
