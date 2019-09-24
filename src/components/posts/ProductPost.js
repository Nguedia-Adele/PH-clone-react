import React from 'react'
import '../../styles/product-post.css'
import Upvote from '../Upvote'
import Comment from '../Comment'

class ProductPost extends React.Component {
	render(){
		return(
			<div className="w-100 product-tile shadow-sm">
				<a href="/post">
					<div className="d-flex">
						<div className="d-flex">
							<div>
								<img src="http://placeimg.com/640/640/tech"
									alt="Product name"
									className="post-thumbnail"/>
							</div>
							<div className="pl-3 my-auto">
								<div>
									<h3 className="mt-n1 bold-text"><small>Product Name</small></h3>
									<p className="text-muted mt-n2">Brief product description</p>
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