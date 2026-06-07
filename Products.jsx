function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">

        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            alt="T-Shirt"
          />
          <h3>Premium T-Shirt</h3>
          <p>₹999</p>
        </div>

        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Shoes"
          />
          <h3>Running Shoes</h3>
          <p>₹2499</p>
        </div>

        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
            alt="Jacket"
          />
          <h3>Winter Jacket</h3>
          <p>₹3499</p>
        </div>

      </div>
    </section>
  );
}

export default Products;