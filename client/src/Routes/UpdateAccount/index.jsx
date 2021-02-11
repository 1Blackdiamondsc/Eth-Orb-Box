import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { Alert } from '@material-ui/lab';
import { TextField, Button } from '@material-ui/core';

export default function UpdateAccount() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/Dashboard")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField id="outlined-basic" label="Email" variant="outlined" defaultValue={currentUser.email} inputRef={emailRef} required  />
                <TextField id="outlined-basic" type="password" label="password" variant="outlined" inputRef={passwordRef} />
                <TextField id="outlined-basic" type="password" label="confirm password" variant="outlined" inputRef={passwordConfirmRef} />
                <Button variant="text" type="submit">Update</Button>
                <Button variant="outlined" component={Link} to="/Dashboard"> Cancel and Go Back</Button>
            </form>
        </>
    )
}