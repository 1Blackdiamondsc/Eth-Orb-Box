import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { TextField, Button, Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TwoCards } from '../../components/Dumb/Grids/CardGrids/TwoXOne';

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
            formStyles: {
                padding: 111
                
            }
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


            <form className={classes.formStyles} noValidate autoComplete="off" onSubmit={handleSubmit}>
                {error && <Alert severity="error">{error}</Alert>}
                <TwoCards
                    left={
                        <TextField label="Email" variant="outlined" inputRef={emailRef} />
                    }
                    right={
                        <TextField  type="password" label="password" variant="outlined" inputRef={passwordRef} />
                    }
                />
                <TwoCards
                    left={
                        <Button disabled={loading} variant="text" type="submit"> Log In </Button>
                    }
                    right={
                        <Button variant="outlined" component={Link} to="/Signup"> Sign Up Here </Button>
                    }
                />







            </form>
        </div>
    )
}