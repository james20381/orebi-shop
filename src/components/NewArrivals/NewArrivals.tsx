'use client'

import Slider from "react-slick"
import { ProductProps } from "../../../type" /* Import defined ProductProps to be used here, e.g: item: ProductProps */
import Product from "../Product/Product"
import NextArrow from "../NextArrow/NextArrow"
import PrevArrow from "../PrevArrow/PrevArrow"
import Container from "../Container/Container"

interface Props {
    products: ProductProps[]
}

const NewArrivals = ({ products }: Props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <Container className="mt-20 lg:-mt-60">
            <div>
                <Slider {...settings}>
                    {products?.map((item: ProductProps) => (
                        <div key={item?._id} className="px-2">
                            <Product product={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    )
}
export default NewArrivals