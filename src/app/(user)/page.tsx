
import BestSellers from "@/components/BestSellers/BestSellers";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import HomeBanner1 from "@/components/HomeBanner1/HomeBanner1";
import HomeBanner2 from "@/components/HomeBanner2";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import { client } from "@/lib/sanityClient";

import { groq } from "next-sanity"

export const revalidate = 10;

const heroQuery = groq`*[_type == 'heroSlider'] {
   image,
   _id
} | order(_createdAt asc)`;

const newArrivalsQuery = groq`*[_type == 'product' && position == 'New Arrivals'] {
    ...
} | order(_createdAt asc)`;

const banner1Query = groq`*[_type == 'homeBanner1'] {
    _id,
    desktopImage,
    mobileImage
}`

const bestSellersQuery = groq`*[_type == 'product' && position == 'Best Sellers']{
    ...
   } | order(_createdAt asc)`;

const banner2Query = groq`*[_type == 'homeBanner2'] {
    image,
    _id,
    text,
    title,
    body
}`

const HomePage = async () => {
    const banners = await client.fetch(heroQuery);
    const newArrivals = await client.fetch(newArrivalsQuery);
    const banner1 = await client.fetch(banner1Query);
    const bestSellersProducts = await client.fetch(bestSellersQuery);
    const banner2 = await client.fetch(banner2Query)
    // console.log(banner2)
    
    return (
        <div className="text-sm overflow-hidden min-h-screen">
            <HeroSlider banners={banners}/>
            <NewArrivals products={newArrivals} />
            <HomeBanner1 banner1={banner1}/>
            <BestSellers products={bestSellersProducts} title="Our Bestsellers" />
            <HomeBanner2 banner2={banner2} />
        </div>
    )
}

export default HomePage
