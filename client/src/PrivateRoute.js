import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"


//private route for rendering components dependant on currentUser.
export default function PrivateRoute({ component: Component, ...rest }) {
    // destructure currentUser from auth context
    const { currentUser } = useAuth()


    //if there is a current user, render the component
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/Login" />
            }}
        ></Route>
    )
}