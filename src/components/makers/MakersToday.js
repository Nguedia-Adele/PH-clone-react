import React from 'react'
import Maker from './Maker'

class MakersToday extends React.Component {
	render() {
		return(
			<div>
				<h6 className="bold-text mb-2">Makers working today</h6>
				<div className="bg-white shadow-sm maker-card">
					<div className="makers-grid">
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
						<Maker/>
					</div>
					<hr style={{margin:"0", borderColor:"#e8e8e8"}}/>
					<div className="text-center mt-3">
						<a href="./makers">JOIN THEM ON MAKERS</a>
					</div>
				</div>
			</div>
		)
	}
}

export default MakersToday