import Image from "next/image"
import Searchbar from "@/components/Searchbar";
import HeroCarousel from "@/components/HeroCarousel";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard"

const Home = async () => {
const allProducts = await getAllProducts();
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
              src="/assets/icons/arrow_down_red.svg"
              alt="arrow_down_red"
              width={16}
              height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of <br></br>
              <span>Gee</span>
              <span className="text-primary">Price</span>
            </h1>

            <p className="mt-6">
            Powerful, self-service analytics
            designed to drive conversion,
            engagement, and retention.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="felx flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home