import './Product.css';
function Product({ product }) {
	return (
		<div className="product">
			<img src={product.image} />
			<h4>{product.title}</h4>
			<p>{product.price}</p>
		</div>
	);
}

export default Product;
