import React from 'react'
import axios from 'axios'

import PopularDiscussions from '../components/popular-discussion/PopularDiscussions'
import ProductList from '../components/posts/ProductList'
import MakersToday from '../components/makers/MakersToday'

class home extends React.Component {
	state = {
		posts: null
	}
	componentDidMount() {
		axios.get('https://europe-west1-social-ba697.cloudfunctions.net/api/posts')
			.then(res => {
				console.log(res.data)
				this.setState({
					posts: res.data
				})
			})
			.catch (err => console.log(err.phase));
	}
	render() {
		let recentPostsMarkup = this.state.posts ? (
			this.state.posts.map(post => <p>{post.body}</p>)
		) : <p>Loading...</p>
		return (
			<div className="row px-10 pt-4 mx-auto">
				<main className="col-8">
					{recentPostsMarkup}
					<PopularDiscussions/>
					<ProductList/>
				</main>
				<aside className="col-4 pt-3">
					<MakersToday/>
				</aside>
			</div>
		);
	}
}

export default home