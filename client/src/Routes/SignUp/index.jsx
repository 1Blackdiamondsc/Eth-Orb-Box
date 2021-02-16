import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { TextField, Button, Typography, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
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
            info: {
                borderColor: theme.palette.secondary.main,
                color: theme.palette.info.main
            },
        }),
    );

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/Dashboard")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }


    const classes = useStyles()
    return (
        <div className={classes.root}>


            {error && <Alert severity="error">{error}</Alert>}

            <Grid container spacing={6} alignItems="center" justify="center" direction="column">


                <Grid item>
                    <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={emailRef} />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" type="password" label="password" variant="outlined" inputRef={passwordRef} />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" type="password" label="confirm password" variant="outlined" inputRef={passwordConfirmRef} />
                </Grid>

                <Grid item>
                    <Button variant="text" component={Link} to="/Login"> already signed up? Login </Button>
                </Grid>
                <Grid item>
                    <Button disabled={loading} variant="outlined" onClick={handleSubmit}> Create Account </Button>
                </Grid>

            </Grid>
        </div>
    )
}
