import React from 'react'

const Login = () => {
    return (
        <form className="wrapper container text-white bg-black">
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login
