function ProductList() {
  const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mobile", price: 20000 },
    { name: "Headset", price: 1500 }
  ]

  return (
    <div>
      <h3>Products</h3>
      {products.map((product, index) => (
        <p key={index}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </div>
  )
}

export default ProductList