import { Product } from "../../../inventory/Product";
import { iShelfRow } from "./types";

const ShelfRow = (width: number = 10, height: number = 2, depth: number = 2, products: Product[] = []): iShelfRow => {
    const component = () => (
        <div 
            className="shelf-row"
            style={{ width: `${width * 50}px`, height: `${height * 10}px` }}>
            ShelfRow
        </div>);
    return {width, height, depth, products, component};
}

export default ShelfRow;
    
