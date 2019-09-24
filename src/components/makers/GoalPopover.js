import React from 'react'
import Comment from '../Comment'
import Cheers from '../Cheers'
class GoalBadge extends React.Component {
	render() {
		return(
			<div className="maker-popover">
				<div className="d-flex py-auto">
					<img src="http://placeimg.com/640/640/nature"
						alt="Maker's name"
						className="popover-image"/>
					<p className="my-auto">Maker's name</p>
				</div>
				<div className="d-flex">
					<p>Maker's current objective</p>
				</div>
				<div className="d-flex">
					<div className="mr-2"><Comment/></div>
					<div>
						<Cheers/>
					</div>
				</div>
			</div>
		)
	}
}

export default GoalBadge