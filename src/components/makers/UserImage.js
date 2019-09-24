import React from 'react'

class UserImage extends React.Component {
	render() {
		return(
			<div className="image-container" >
				<img src="http://placeimg.com/640/640/nature"
					alt="Maker's name"
					className="user-image" />

				<span className="online-badge"></span>
			</div>
		)
	}
}

export default UserImage