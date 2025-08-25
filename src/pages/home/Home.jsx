import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { products } from "../../data/products";
const Home = () => {
  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);

  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من اللابتوبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجديد من الجولات" />
      <Slider data={mobiles} />
      <HeadingTitle title="تسوق حسب الشركة 🤩" />
      <Brands />
    </>
  );
};

export default Home;
