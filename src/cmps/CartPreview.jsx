

export function CartPreview({ product }) {
    return (
        <article>
            <img src={`../../imgs/${product.img}`} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <h4>price: {product.price}$</h4>
                <h4>quantity: {product.quantity}</h4>
            </div>
        </article>
    )
}
