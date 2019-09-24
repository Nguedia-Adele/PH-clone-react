import React from 'react'
import ProductPost from './ProductPost'

class ProductList extends React.Component {
	render() {
		return(
			<div className="mt-4">
				<p><big>Product List</big></p>
				<div>
					<ProductPost/>
					<ProductPost/>
					<ProductPost/>
					<ProductPost/>
				</div>
			</div>
		)
	}
}

export default ProductList