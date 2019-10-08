import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/login-signup.css'
import logo from '../images/logo.png'

class login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			loading: false,
			errors: {}
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState ({
			loading: true
		});
		const userData = {
			email: this.state.email,
			password: this.state.password
		}
		axios.post('/login', userData)
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
						<h3 className="text-muted mb-3">LOGIN</h3>
						
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

						{errors.general && <span className="error-message">{errors.general}</span>}

						<div className="text-center">
							<button className="button-auth mt-4"
								id="login"
								type="submit"
								disabled = {loading}
								onClick = {this.handleSubmit}>
									LOGIN
							</button>
							{loading && <p>Loading...</p>}
						</div>

						<small>
							<p>Don't have an account? Signup
								<span>
									<Link to="/signup"> here</Link>
								</span>
							</p>
						</small>
					</form>
				</div>
			</div>
		);
	}
}

export default login