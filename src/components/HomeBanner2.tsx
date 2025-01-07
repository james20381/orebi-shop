import { urlFor } from '@/lib/sanityClient';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Container from './Container/Container';

const HomeBanner2 = ({ banner2 }: any) => {
    return (
        <div className="bg-[#f3f3f3] py-5">
            <Container>
                {banner2?.map((item: any) => (
                    <div key={item?._id} className="grid grid-cols-1 md:grid-cols-2">
                        {/* Render the image */}
                        {item.image && (
                            <div className="flex justify-center">
                                <Image
                                    src={urlFor(item.image).url()}
                                    alt={item.title || 'Home banner 2'}
                                    width={300}
                                    height={278}
                                    className="max-w-full"
                                />
                
                
                            </div>
                        )}
                        {/* Render the text */}
                        {item.text && (
                            <div className="inset-0 flex justify-center flex-col gap-5 p-5">
                                <h3 className="text-3xl font-medium text-primeColor">
                                    {item.text}
                                </h3>
                                {item.body && (
                                    <div className=" text-zinc-500 ">
                                        <PortableText value={item.body} />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default HomeBanner2