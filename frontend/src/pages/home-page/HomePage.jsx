import "./HomePage.css";
import Header from "./../../components/header/Header";
import ProductsGrid from "./ProductsGrid";

export default function HomePage({ cart, loadCart, products, setProducts }) {
    return (
        <>
            <title>Ecom</title>
            <Header cart={cart} setProducts={setProducts} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
