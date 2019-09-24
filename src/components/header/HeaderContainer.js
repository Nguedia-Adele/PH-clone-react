import React from 'react'
import logo from '../../images/logo.png'
import '../../styles/header.css'

import Searchbar from '../searchbar/Searchbar'
import Navigation from './Navigation'
import LoginSignup from './LoginSignup'

class HeaderContainer extends React.Component {
	render() {
		return(
			<div className="px-9 mx-auto bg-white">
				<div className="navbar py-2">
					<div className="d-flex">
						<img src={logo} alt="logo" className="logo"/>
						<Searchbar/>
						<Navigation/>
					</div>
					<div className="d-flext text-right">
						<LoginSignup/>
					</div>
				</div>
			</div>
		)
	}
}

export default HeaderContainer