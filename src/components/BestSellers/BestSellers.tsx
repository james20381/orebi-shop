import { ProductProps } from "../../../type"
import Product from "../Product/Product"
import Container from "../Container/Container"
import Heading from "../Heading/Heading";

interface Props {
    products: ProductProps[];
    title?: string;
}

const BestSellers = ({ products, title }: Props) => {
    return (
        <Container className="pb-10 mb-10">
            <Heading heading={title} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products?.map((item: ProductProps) => (
                    <Product key={item?._id} product={item} bg="#ffffff" />
                ))}
            </div>
        </Container>
    );
};

export default BestSellers;