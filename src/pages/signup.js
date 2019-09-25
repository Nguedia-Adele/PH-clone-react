import React from 'react'
import '../styles/login-signup.css'
import logo from '../images/logo.png'

class signup extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="center-div">
						<form action="" className="border border-light rounded px-5 py-4 bg-white shadow-sm">
						<img src={logo} alt="Logo" className="logo-auth"/>
							<h3 className="text-muted mb-3">SIGNUP</h3>
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
									placeholder="Please enter your password"
									required/>
							</div>

							<div>
								<input
									type="password"
									id="passwordConfirm"
									name="passwordConfirm"
									placeholder="Please confirm your password"
									required/>
							</div>

							<div>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Please enter your username"
									required/>
							</div>

							<div className="text-center">
								<button className="button-auth mt-4"
									id="login"
									type="submit">SIGNUP
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default signup