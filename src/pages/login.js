import React from 'react'
import '../styles/login-signup.css'
import logo from '../images/logo.png'

class login extends React.Component {
	render() {
		return (
			<div>
				<div className="center-div">
					<form action="" className="border border-light rounded p-5 bg-white shadow-sm">
					<img src={logo} alt="Logo" className="logo"/>
						<h3 className="text-muted mb-3">LOGIN</h3>
						<div>
							<input 
								type="email"
								id="email"
								name="email"
								placeholder="Please, enter your email"
								required/>
						</div>

						<div>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Please, enter your password"
								required/>
						</div>

						<div className="text-center">
							<button className="mt-4"
								id="login"
								type="submit">LOGIN
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default login