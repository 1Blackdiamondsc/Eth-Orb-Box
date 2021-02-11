import React, { useState } from "react"
import { Button, Typography, } from "@material-ui/core"
import { Alert } from '@material-ui/lab';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import TwoCards from "../../components/Dumb/Grids/UtilityGrids/TwoXOne"

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/Login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            {error && <Alert severity="error">{error}</Alert>}
            <Typography color="primary" variant="h2"> Email: {currentUser.email} </Typography>
            <Button variant="outlined" component={Link} to="/Update-Account">Change Account Details</Button>
            <Button variant="outlined" onClick={handleLogout}>Log Out</Button>
        </>
    )
}