import React from 'react'
import axios from 'axios'

import PopularDiscussions from '../components/popular-discussion/PopularDiscussions'
import ProductPost from '../components/posts/ProductPost'
import MakersToday from '../components/makers/MakersToday'

class home extends React.Component {
	state = {
		posts: null
	}
	componentDidMount() {
		axios.get('/posts')
			.then(res => {
				console.log(res.data)
				this.setState({
					posts: res.data
				})
			})
			.catch (err => console.log(err));
	}
	render() {
		let recentPostsMarkup = this.state.posts ? (
			this.state.posts.map(post => <ProductPost key={post.postId} post={post}/>)
		) : <p>Loading...</p>

		return (
			<div className="row px-10 pt-4 mx-auto">
				<main className="col-8">
					<PopularDiscussions/>
					<div className="mt-4">
						<p><big>Product List</big></p>
						{recentPostsMarkup}
					</div>
				</main>
				<aside className="col-4 pt-3">
					<MakersToday/>
				</aside>
			</div>
		);
	}
}

export default home