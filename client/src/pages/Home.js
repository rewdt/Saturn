import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import homebg from '../assets/saturn_home.jpg'
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
    loginButton: {
        '&:hover': {
            backgroundColor: '#fff',
            color: '#348AC7'
        },
        [theme.breakpoints.only('lg')]: {
            padding: theme.spacing(0.5, 4)
        },
        borderRadius: 20,
        borderColor: '#fff',
        color: '#fff',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    mottoStyle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    lastmottoStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            textAlign: 'left'
        }
    },
    motto2: {
        color: '#fff',
        fontWeight: 'bold'
    },
    appName: {
        color: '#fff'
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.inputcontainer}>
                <img src={Logo} style={{ height: 212, width: 251 }} alt="logo" />
                <Typography className={classes.motto2}>
                    Tired of Earth?..Let's go to
                </Typography>
                <Typography variant="h3" className={classes.appName}>
                    Saturn
                </Typography>
                <div>
                    <Button variant="outlined" className={classes.loginButton}>
                        <Link to="/login" style={{ textDecorationLine: 'none', color: '#fff' }}>
                            Log in
                        </Link>
                    </Button>
                    <Button variant="outlined" className={classes.loginButton}>Sign up</Button>
                </div>
                <div>
                    <Typography className={classes.mottoStyle}>
                        - Become Famous or Infamous or Somewhere In Between
                    </Typography>
                    <Typography className={classes.lastmottoStyle}>
                        - Catch fun..Or Not
                    </Typography>
                </div>
            </Paper>
        </div>
    )
}
