import React from 'react'

class DiscussionHeader extends React.Component {
	render() {
		return(
			<div className="d-flex py-auto">
				<a href="/maker">
					<div>
						<img src="https://placeimg.com/640/640/people"
							className="profile-img"
							alt="Maker's name"/>
					</div>
				</a>
				<div className="my-auto">
					<a href="/maker" className="mx-2 text-dark">
						<span className="bold-text">Abadesi</span>
					</a>
					<span className="mx-2 text-muted">Head of Maker Outreach at Product Hunt</span>
				</div>
				<span className="ml-auto text-muted">
					<time>1d</time>
				</span>
			</div>
		)
	}
}

export default DiscussionHeader