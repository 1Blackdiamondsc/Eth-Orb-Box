import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { TextField, Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

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

    return (
        <>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={emailRef} />
                <TextField id="outlined-basic" type="password" label="password" variant="outlined" inputRef={passwordRef} />
                <TextField id="outlined-basic" type="password" label="confirm password" variant="outlined" inputRef={passwordConfirmRef} />
                <Button disabled={loading} variant="text" type="submit"> Create Account </Button>
                <Button variant="outlined" component={Link} to="/Login"> already signed up? Login </Button>
            </form>

            <Typography variant="body1">
                a minimum of 6 characters required
                a-z allowed
                A-Z allowed
                0-9 allowed
                all symbols
white spaces allowed
            </Typography>
        </>
    )
}
