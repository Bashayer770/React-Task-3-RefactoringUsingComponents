function ProductList({ name, price, image }) {
  return (
    <div className="product">
      <img className="productImage" alt={name} src={image} />
      <p className="text">{name}</p>
      <p className="text">{price} KD</p>
    </div>
  );
}

export default ProductList;
