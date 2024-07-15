import { Product } from "./Product";

interface ProductListProps {
    products: Product[];
    autoMarkup: number;
    sell: (index: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, autoMarkup, sell} ) => (
    <div className="product-list">
        {products.map((product, index) => (
            <div key={index} className="product-square" onClick={() => sell(index)}>
                <div style={{ 
                    width: "inherit", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    fontSize: "small"
                }}>
                    <div>{product.usd(product.getMarketValue())}</div>
                    <div>{product.getInStock()}</div>
                    <div>{product.getDemand(product.getValue()*(1+autoMarkup)).toFixed(2)}</div>
                </div>
                <div style={{ fontSize: "xxx-large" }}>{product.getIcon()}</div>
                <div style={{ fontSize: "medium", color: product.getValue() * (1 + autoMarkup) > product.getValue() ? "green" 
                    : product.getValue() * (1 + autoMarkup) < product.getValue()
                        ? "red"
                        : "black"}}>{product.usd(product.getValue()*(1+autoMarkup))}</div>
                <div className="product-info">
                    <div className="popup">
                        <div className="product-name">{product.getName()}</div>
                    </div>
                </div>
                <div className="product-info" style={{ transform: "translate(0%, -50%)"}}>
                    <div className="popup">
                        <div className="product-name">{product.getName()}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default ProductList;
