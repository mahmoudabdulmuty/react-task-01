import Product from './Product';

export function ProductList({ products }) {
	return (
		<section className="product-list container">
			<h3>Product List</h3>
			{products.map((product) => {
				return <Product key={product.id} product={product} />;
			})}
		</section>
	);
}

export default ProductList;
