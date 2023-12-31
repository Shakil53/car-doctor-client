import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="card glass space-y-6 mt-8">
            <div className="text-center mt-4">
                <h3 className="text-4xl font-bold text-orange-600">Product</h3>
                <h3 className='text-3xl'>Our Products Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable.  </p>

            </div>
            <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className="ml-[43%]">
                <button className=" btn btn-outline btn-warning">More Services</button>
            </div>
        </div>
    );
};

export default Products;