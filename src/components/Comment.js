import React from 'react'

class Comment extends React.Component {
	render(){
		return(
			<div>
				<button style={{border:"1px solid #e8e8e8",
					backgroundColor:"transparent",
					color: "#6c757d",
					padding:"2px 6px",
					borderRadius:"3px"
				}}>comments</button>
			</div>
		)
	}
}

export default Comment