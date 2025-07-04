import React from "react";
import ProductCard from "../component/ProductCard";
import Carousel from "../component/Corolsel";
import SectionHeader from "../component/SectionHeader";
import ProductGrid from "../component/ProductGrid";
import Footer from "../component/Footer";

const Home = () => {
  const products = [
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    {
      title: "Smart Watch Series 8",
      price: 2999,
      image:
        "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
      rating: 4.5,
    },
    // ...more
  ];
  const images = [
    "https://sp.yimg.com/ib/th/id/OIP.Nv0yUjdd4mALrn8kCzKbKAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    "https://sp.yimg.com/ib/th/id/OIP.iCD_PX06BqMuyoB7jIKBewHaJQ?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    "https://sp.yimg.com/ib/th/id/OIP.cSgjmqsQ5KmBQQF9qO-8zQHaFq?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
  ];
  return (
    <div>
      <Carousel images={images} />
      <SectionHeader
        title="Featured Products"
        subtitle="Hand-picked items just for you"
      />

      <ProductGrid products={products} />

      <SectionHeader
        title="Latest Products"
        subtitle="Hand-picked items just for you"
      />
      <ProductGrid products={products} />
      <Footer/>
    </div>
  );
};
export default Home;
