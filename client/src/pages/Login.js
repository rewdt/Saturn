import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Button, TextField } from '@material-ui/core';
import homebg from '../assets/auth_image.jpg'
import Logo from '../assets/saturn_logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `linear-gradient(to bottom right, #348AC7, #212121)`,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputcontainer: {
        backgroundImage: `url(${homebg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80%',
        width: '70%',
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    formContainer: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    textField: {
        width: 400,
        [theme.breakpoints.down('sm')]: {
            width: 250
        },
    },
    loginButton: {
        borderRadius: 44,
        backgroundImage: `linear-gradient(to left, #348AC7, #212121)`
    }
}))

export default function Login() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.inputcontainer}>
                    <div style={{ flex: 2 }}>
                        <img src={Logo} style={{ height: 212, width: 251 }} alt="logo" />
                    </div>
                    <div className={classes.formContainer}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                id="standard-uncontrolled"
                                label="Email"
                                defaultValue="foo"
                                className={classes.textField}
                                margin="normal"
                            />
                            <TextField
                                id="standard-uncontrolled"
                                label="Password"
                                defaultValue="foo"
                                className={classes.textField}
                                margin="normal"
                            />
                        </div>
                        <Typography variant="caption" style={{ textAlign: 'right' }}>
                            Forgot Password?
                        </Typography>
                        <Button variant="contained" size="large" className={classes.loginButton}>
                            Login
                        </Button>
                    </div>
                </Paper>
            </div>
        </div>
    )
}
