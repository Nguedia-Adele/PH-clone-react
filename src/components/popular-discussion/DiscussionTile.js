import React from 'react'
import '../../styles/discussion.css'

import DiscussionHeader from './DiscussionHeader'
import DiscussionFooter from './DiscussionFooter'
import Upvote from '../Upvote'

class DiscussionTile extends React.Component {
	render() {
		return(
			<div className="w-100 discussion-tile shadow-sm">
				<DiscussionHeader/>

				<div className="d-flex mt-2">
					<div className="my-auto pr-4">
						<a href="/post">
							<p className="discussion-title">Makers, what are you working on this week? (w/c August 19)</p>
						</a>
						<a href="/post">
							<p className="text-muted">Hi Makers! I'm working on some new recordings of Product Hunt radio and community engagement and growth around Makers.</p>
						</a>
					</div>
					<div className="ml-auto"><Upvote/></div>
				</div>
				
				<hr style={{margin:"0", borderColor:"#e8e8e8"}} />
				<DiscussionFooter/>
			</div>
		)
	}
}

export default DiscussionTile