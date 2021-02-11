import React, { useRef, useState } from "react"
import { Button, Typography, TextField} from "@material-ui/core"
import { Alert } from '@material-ui/lab';
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Email" variant="outlined"  inputRef={emailRef} required />
                <Button variant="text" type="submit">Submit</Button>
                <Button variant="outlined" component={Link} to="/Signup"> Sign Up Here </Button>
            </form>

        </>
    )
}