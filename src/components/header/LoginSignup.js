import React from 'react'
import {Link} from 'react-router-dom'

class LoginSignup extends React.Component {
	render(){
		return (
			<div>
				<Link to="/login">
					<button
						className="button button-white"
						to="/login">
							LOG IN
					</button>
				</Link>

				<Link to="/signup">
					<button
						className="button button-orange"
						to="/signup">
							SIGNUP
					</button>
				</Link>
			</div>
		)
	}
}

export default LoginSignup