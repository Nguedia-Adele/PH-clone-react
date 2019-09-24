import React from 'react'
import GoalPopover from './GoalPopover'
import UserImage from './UserImage'
import '../../styles/makers.css'

class Maker extends React.Component {
	render() {
		return(
			<div className="one-maker">
				{ /*<GoalPopover/>*/}
				<UserImage/>
			</div>
		)
	}
}

export default Maker