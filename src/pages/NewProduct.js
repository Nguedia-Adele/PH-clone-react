import React from 'react'

class NewProduct extends React.Component {
	render () {
		return(
			<div className="center-div">
				<form action="" className="border border-light rounded px-5 py-4 bg-white shadow-sm">
					<h3 className="text-muted mb-3">NEW PRODUCT</h3>
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
						<button className="button-auth mt-4"
							id="login"
							type="submit">POST
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default NewProduct