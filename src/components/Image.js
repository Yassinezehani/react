import { product } from "../product";

function Image() {
    return <img src={product.img} alt={product.name} />
}

export default Image;