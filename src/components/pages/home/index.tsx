import Banner from "./Banner";

import BestSeller from "./BestSeller";

import LatestNews from "./LatestNews";
import FeaturedProducts from "./FeaturedProducts";
import SearchArea from "./SearchArea";
import ServiceInfo from "./ServiceInfo";
import ProductHighlight from "./ProductHighlight";
import FlashSale from "./FlashSale";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mx-auto">
        <FlashSale />
        <BestSeller />
        <ProductHighlight />
        <ServiceInfo />
        <LatestNews />
        <FeaturedProducts />
        <SearchArea />
      </div>
    </>
  );
}
