import Link from "next/link"
import { ProductProps } from "../../../type"
import Image from "next/image"
import { urlFor } from "@/lib/sanityClient"
import { AiOutlineShopping } from "react-icons/ai"
import { BsArrowsFullscreen } from "react-icons/bs"
import { MdOutlineStarPurple500 } from "react-icons/md"

interface Props {
    product: ProductProps;
    bg?: string;
}

const Product = ({ product, bg }: Props) => {
    return (
        <div className="w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
            <div className="w-full flex items-center justify-center bg-white overflow-hidden">
                <div className={`relative m-2 ${bg}`}>
                    <Link href={`/product/${product?.slug?.current}`}>
                        <Image
                            src={urlFor(product?.image).url()}
                            alt="product image"
                            width={700}
                            height={700}
                            className=""
                        />
                    </Link>
                    <div className="hidden absolute w-full bottom-0 md:flex items-center gap-5 justify-center translate-y-[180%] group-hover:-translate-y-2 transition-transform duration-300">
                        <button

                            className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
                        >
                            <span>
                                <AiOutlineShopping />
                            </span>
                            Add to bag
                        </button>
                        <Link
                            href={`/product/${product?.slug?.current}`}
                            className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
                        >
                            <span>
                                <BsArrowsFullscreen />
                            </span>
                            Quick view
                        </Link>
                    </div>
                    {product?.isnew && (
                        <div className="absolute top-2 right-2 z-40">
                            <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md">
                                New
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-5 px-4">
                <div className="flex items-center justify-between">
                    <h2 className="xl:hidden text-lg text-primeColor font-bold">
                    {product?.title.substring(0, 15)}
                    </h2>
                    <h2 className="hidden xl:block text-lg text-primeColor font-bold">
                    {product?.title}
                    </h2>

                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p className="text-[#767676] text-xs line-through">
                            ${product?.rowprice}
                        </p>
                        <p className="font-semibold">${product?.price}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <MdOutlineStarPurple500 className="text-lg text-yellow-500" />
                        <span className="font-medium text-sm">{product?.ratings}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Product