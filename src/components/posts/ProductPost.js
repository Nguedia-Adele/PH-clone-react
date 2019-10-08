import React from 'react'
import '../../styles/product-post.css'
import Upvote from '../Upvote'
import Comment from '../Comment'

class ProductPost extends React.Component {
	render(){
		//const { classes, post : {postId, body, userName, postedAt, userImage, voteCount, commentCount} } = this.props

		return(
			<div className="w-100 product-tile shadow-sm">
				<a href="/post">
					<div className="d-flex">
						<div className="d-flex">
							<div>
								<img src={this.props.post.userImage}
									alt="Product name"
									className="post-thumbnail"/>
							</div>
							<div className="pl-3 my-auto">
								<div>
									<h4 className="mt-n1 bold-text"><small>Product Name</small></h4>
									<p className="text-muted mt-n2">{this.props.post.body}</p>
								</div>
								<div className="d-flex mt-n2">
									<Comment/>
									<p className="text-muted ml-2">Category</p>
								</div>
							</div>
						</div>
						<div className="ml-auto my-auto"><Upvote/></div>
					</div>
				</a>
			</div>
		)
	}
}

export default ProductPost