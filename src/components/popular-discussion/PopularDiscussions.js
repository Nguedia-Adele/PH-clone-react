import React from 'react'
import DiscussionTile from './DiscussionTile'

class PopularDiscussions extends React.Component {
	render() {
		return(
			<div>
				<p className="text-muted">POPULAR DISCUSSIONS</p>
				<DiscussionTile/>
			</div>
		)
	}
}

export default PopularDiscussions