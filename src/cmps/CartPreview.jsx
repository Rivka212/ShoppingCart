

export function CartPreview({ product, onRemoveProductFromCart, onQuantityChange }) {
    return (
        <article>
            <div className="product-info">
                <img src={`../../imgs/${product.img}`} alt={product.title} />
                <div>
                    <h4>{product.title}</h4>
                    <h4>price: {product.price}$</h4>
                    <h4>quantity: {product.quantity}</h4>
                </div>
            </div>
            <div className="cart-controls">
                <button onClick={() => onQuantityChange(product._id, -1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => onQuantityChange(product._id, +1)}>+</button>
                <button className="remove-btn" onClick={() => onRemoveProductFromCart(product._id)}>🗑️</button>
            </div>
        </article>
    )
}
