import React from 'react'
import Comment from '../Comment'

class DiscussionFooter extends React.Component {
	render() {
		return(
			<div className="d-flex py-2">
				<div className="mr-2"><Comment/></div>
				<p className="my-auto ml-2 text-muted">REPLY</p>
			</div>
		)
	}
}

export default DiscussionFooter