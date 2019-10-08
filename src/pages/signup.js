import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/login-signup.css'
import logo from '../images/logo.png'

class signup extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			name: '',
			loading: false,
			errors: {}
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState ({
			loading: true
		});
		const newUserData = {
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			name: this.state.name
		}
		axios.post('/signup', newUserData)
			.then (res => {
				console.log(res.data);
				localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
				this.setState({
					loading: false
				});
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({
					errors: err.response.data,
					loading: false
				})
			})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { errors, loading } = this.state;
		
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
									value = {this.state.email}
									onChange = {this.handleChange}
									required/>

								<br/>
								{errors.email && <span className="error-message">{errors.email}</span>}
							</div>

							<div>
								<input
									type="password"
									id="password"
									name="password"
									placeholder="Please enter your password"
									value = {this.state.password}
									onChange = {this.handleChange}
									required/>

								<br/>
								{errors.password && <span className="error-message">{errors.password}</span>}
							</div>

							<div>
								<input
									type="password"
									id="confirmPassword"
									name="confirmPassword"
									placeholder="Please confirm your password"
									value = {this.state.confirmPassword}
									onChange = {this.handleChange}
									required/>

								<br/>
								{errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
							</div>

							<div>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Please enter your username"
									value = {this.state.name}
									onChange = {this.handleChange}
									required/>

								<br/>
								{errors.name && <span className="error-message">{errors.name}</span>}
							</div>

							{errors.general && <span className="error-message">{errors.general}</span>}

							<div className="text-center">
								<button className="button-auth mt-4"
									id="signup"
									type="submit"
									disabled = {loading}
									onClick = {this.handleSubmit}>
										SIGNUP
								</button>
								{loading && <p>Loading...</p>}
							</div>

							<small>
								<p>Already have an account? Login
									<span>
										<Link to="/login"> here</Link>
									</span>
								</p>
							</small>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default signup

/* import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/login-signup.css'
import logo from '../images/logo.png'

class signup extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			name: '',
			loading: false,
			errors: {}
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState ({
			loading: true
		});
		const newUserData = {
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			name: this.state.name
		}
		axios.post('/signup', newUserData)
			.then (res => {
				console.log(res.data);
				localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
				this.setState({
					loading: false
				});
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({
					errors: err.response.data,
					loading: false
				})
			})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { errors, loading } = this.state;

		return (
			<div>
				<div className="center-div">
					<form noValidate
						onSubmit = {this.handleSubmit}
						className="border border-light rounded px-5 py-4 bg-white shadow-sm">
						<img src={logo} alt="Logo" className="logo-auth"/>
						<h3 className="text-muted mb-3">SIGNUP</h3>
						
						<div>
							<input 
								type="email"
								id="email"
								name="email"
								placeholder="Please, enter your email"
								value = {this.state.email}
								onChange = {this.handleChange}
								required/>

							<br/>
							{errors.email && <span className="error-message">{errors.email}</span>}
						</div>

						<div>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Please, enter your password"
								value = {this.state.password}
								onChange = {this.handleChange}
								required/>

							<br/>
							{errors.password && <span className="error-message">{errors.password}</span>}
						</div>

						<div>
							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								placeholder="Please, confirm your password"
								value = {this.state.confirmPassword}
								onChange = {this.handleChange}
								required/>

							<br/>
							{errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
						</div>

						<div>
							<input
								type="password"
								id="name"
								name="name"
								placeholder="Please, enter your username"
								value = {this.state.name}
								onChange = {this.handleChange}
								required/>

							<br/>
							{errors.name && <span className="error-message">{errors.name}</span>}
						</div>

						{errors.general && <span className="error-message">{errors.general}</span>}

						<div className="text-center">
							<button className="button-auth mt-4"
								id="login"
								type="submit"
								disabled = {loading}
								onClick = {this.handleSubmit}>
									SIGNUP
							</button>
							{loading && <p>Loading...</p>}
						</div>

						<small>
							<p>Already have an account? login
								<span>
									<Link to="/login"> here</Link>
								</span>
							</p>
						</small>
					</form>
				</div>
			</div>
		);
	}
}

export default signup
*/