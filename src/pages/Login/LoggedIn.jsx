function LoggedIn({ email, roles}){


    return(
        <div>
        <h3>Welcome: {email}</h3>
        <h3>Roles: {roles}</h3>
        </div>
    )
}
export default LoggedIn;