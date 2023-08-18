
const ProductCard = ({ product }) => {
    console.log(product)
    const { img, title, price } = product;
    return (
        <div className="card glass h-96">
            <figure className="mx-auto w-72 h-72"><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: &{price}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;