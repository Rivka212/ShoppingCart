

export function CartPreview({ product, onRemoveProductFromCart, onQuantityChange }) {
    return (
        <article>
            <div className="product-info">
                <img className="product-img" src={`../../imgs/${product.img}`} alt={product.title} />
                <div>
                    <h4>{product.title}</h4>
                    <h4>price: {product.price}$</h4>
                    <h4>quantity: {product.quantity}</h4>
                </div>
            </div>
            <div className="cart-controls">
                <div className="plus-minus">
                    <button onClick={() => onQuantityChange(product._id, -1)}><img className="minus" src={`../../icons/minus.png`} alt="minus" /></button>
                    <span>{product.quantity}</span>
                    <button onClick={() => onQuantityChange(product._id, +1)}><img className="plus" src={`../../icons/plus.png`} alt="plus" /></button>
                </div>
                <button className="remove-btn" onClick={() => onRemoveProductFromCart(product._id)}><img className="trash" src={`../../icons/trash.png`} alt="trash" /></button>
            </div>
        </article>
    )
}
