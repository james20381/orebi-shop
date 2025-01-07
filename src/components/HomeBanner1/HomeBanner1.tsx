import { urlFor } from "@/lib/sanityClient"
import Image from "next/image"

const HomeBanner1 = ({ banner1 }: any) => {
    return (
        <div className="mt-10 flex justify-center">
            {banner1?.map((item: any) => (
                <div key={item?._id} className="relative">
                    {/* <Image
                        src={urlFor(item.image).url()}
                        alt="Home banner 1"
                        width={2000}
                        height={800}
                        className="min-w-[1000px] h-auto object-cover"
                    /> */}
                    {/* Mobile Image */}
                    <div className="block lg:hidden">
                        {item?.mobileImage && (
                            // <Image
                            //     src={urlFor(item.mobileImage).url()}
                            //     alt="Home banner 1 (Mobile)"
                            //     width={1200}
                            //     height={240}
                            //     className="w-full h-auto object-cover"
                            // />
                            <Image
                                src={urlFor(item.mobileImage).url()}
                                alt="Home banner 1 (Mobile)"
                                width={2000}
                                height={800}
                                className="w-full h-auto object-cover min-w-[1000px]"
                            />
                        )}
                    </div>

                    {/* Desktop Image */}
                    <div className="hidden lg:block">
                        {item?.desktopImage && (
                            <Image
                                src={urlFor(item.desktopImage).url()}
                                alt="Home banner 1 (Desktop)"
                                width={2000}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default HomeBanner1