import React from "react";
import ProductCard from "../component/ProductCard";
import Carousel from "../component/Corolsel";
import SectionHeader from "../component/SectionHeader";
import ProductGrid from "../component/ProductGrid";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const images = [
    "https://img2.wallspic.com/previews/4/2/5/8/5/158524/158524-boohoo_x_taylor_hill-taylor_hill-coat-victorias_secret-boohoo-550x310.jpg",
    "https://img1.wallspic.com/previews/7/3/9/4/6/164937/164937-tatyana_kozelkina-wicked_ways-model-fai_pea-dress-500x.jpg",
    "https://img1.wallspic.com/previews/0/4/1/8/3/138140/138140-clothing-black-hairstyle-gown-lady-500x.jpg",
  ];

  const { feauturedProudcts , latestProducts} = useSelector((state)=>state.product)
   
  return (
    <div>
      <Carousel images={images} />
      <SectionHeader
        title="Featured Products"
        subtitle="Hand-picked items just for you"
      />

      <ProductGrid products={feauturedProudcts} />

      <SectionHeader
        title="Latest Products"
        subtitle="Hand-picked items just for you"
      />
      <ProductGrid products={latestProducts} />
      <Footer/>
    </div>
  );
};
export default Home;
