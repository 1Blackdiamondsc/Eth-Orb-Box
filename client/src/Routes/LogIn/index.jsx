import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { TextField, Button, Container, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                maxHeight: '100vh',
                paddingTop: 100,
                paddingBottom: 100,
                paddingRight: 0,
                paddingLeft: 0,

            },
        }),
    );

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/Dashboard")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>


            {error && <Alert severity="error">{error}</Alert>}

            <Grid container spacing={6} alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField label="Email" variant="outlined" inputRef={emailRef} />
                </Grid>
                <Grid item>
                    <TextField type="password" label="password" variant="outlined" inputRef={passwordRef} />
                </Grid>
                <Grid item>
                    <Button variant="text" component={Link} to="/Forgot-Password"> forgot password?</Button>
                </Grid>
                <Grid item>
                    <Button  variant="outlined" disabled={loading} onClick={handleSubmit}> Log In </Button>
                </Grid>
            </Grid>
        </div>
    )
}