import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import imgs from "../../assets/imgs";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Promotions from "../../components/Promotions/Promotions";
import icons from "../../assets/icons";
import ProductCard from "../../UI/Card/ProductCard";
import Button from "../../UI/Button/Button";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import MENU from "../../util/menu";
import Carousel from "../../components/Carousel/Carousel";
import { getNewsList, getProductsType } from "../../util/http";
import NewsCard from "../../UI/Card/NewsCard";

function Home() {
  const {
    data: hotProductData,
    isPending: isPendingHotProductData,
    error: errorHotProductData,
  } = useQuery({
    queryKey: ["product-type", { type: "hot-product" }],
    queryFn: getProductsType,
  });

  const {
    data: phoneProductData,
    isPending: isPendingPhoneProductData,
    error: errorPhoneProductData,
  } = useQuery({
    queryKey: ["product-type", { type: "phone" }],
    queryFn: getProductsType,
  });

  const {
    data: smartWatchProductData,
    isPending: isPendingSmartWatchProductData,
    error: errorSmartWatchProductData,
  } = useQuery({
    queryKey: ["product-type", { type: "smart-watch" }],
    queryFn: getProductsType,
  });

  const [accessory, setAccessory] = useState("charging-cable");

  const handleChangeAccessory = (id) => {
    setAccessory(id);
  };

  const {
    data: accessoryProductData,
    isPending: isPendingAccessoryProductData,
    error: errorAccessoryProductData,
  } = useQuery({
    queryKey: ["product-type", { type: accessory }],
    queryFn: getProductsType,
  });

  const [sound, setSound] = useState("earphone");

  const handleSound = (id) => {
    setSound(id);
  };

  const optionSound = (
    <div className="flex gap-5">
      <Button
        mode={sound === "earphone" ? "dark-red" : "default"}
        onClick={() => handleSound("earphone")}
      >
        Tai nghe
      </Button>
      <Button
        mode={sound === "loudspeaker" ? "dark-red" : "default"}
        onClick={() => handleSound("loudspeaker")}
      >
        Loa không dây
      </Button>
    </div>
  );

  const {
    data: soundProductData,
    isPending: isPendingSoundProductData,
    error: errorSoundProductData,
  } = useQuery({
    queryKey: ["product-type", { type: sound }],
    queryFn: getProductsType,
  });

  const {
    data: newsData,
    isPending: isPendingNewsData,
    error: errorNewsData,
  } = useQuery({ queryKey: ["news"], queryFn: getNewsList });

  const optionAccessory = (
    <div className="flex justify-between items-center ">
      <div className="flex gap-5">
        <Button
          mode={accessory === "charging-cable" ? "dark-red" : "default"}
          onClick={() => handleChangeAccessory("charging-cable")}
        >
          Cáp sạc
        </Button>
        <Button
          mode={accessory === "charger" ? "dark-red" : "default"}
          onClick={() => handleChangeAccessory("charger")}
        >
          Củ sạc
        </Button>
        <Button
          mode={accessory === "screen-protector" ? "dark-red" : "default"}
          onClick={() => handleChangeAccessory("screen-protector")}
        >
          Miếng dán màn hình
        </Button>
      </div>
    </div>
  );

  if (
    errorHotProductData ||
    errorPhoneProductData ||
    errorSmartWatchProductData
  ) {
    return <p>{error.message}</p>;
  }

  return (
    <main className="max-w-[1300px] m-auto">
      <section className="flex gap-5">
        <div className="min-w-[300px]"></div>

        <div className="grid grid-cols-3 mt-2 gap-4">
          <div className="col-start-1 col-span-2 row-span-2">
            <SimpleSlider />
          </div>
          <div>
            <img src={imgs.banner_1} alt="Banner" />
          </div>
          <div>
            <img src={imgs.banner_2} alt="Banner" />
          </div>
          <div>
            <img src={imgs.banner_3} alt="Banner" />
          </div>
          <div>
            <img src={imgs.banner_4} alt="Banner" />
          </div>
          <div>
            <img src={imgs.banner_5} alt="Banner" />
          </div>
        </div>
      </section>

      <Promotions />

      <SectionContainer className="bg-amber-400 p-3 rounded-md" seeAll={false}>
        <h1 className="flex gap-3 items-center text-2xl font-bold">
          Giảm sốc 50%
          <span>
            <img src={icons.flashsale_hot} alt="Giảm sốc 50%" />
          </span>
        </h1>
        <p>BẢN TIN KHUYỄN MÃI</p>

        {isPendingHotProductData && <p>Loading...</p>}

        {!isPendingHotProductData && (
          <ul className="grid grid-cols-5 gap-3">
            {hotProductData?.products.map((product) => (
              <li key={product?.id} className="rounded-md overflow-hidden">
                <ProductCard product={product} flashSale={true} />
              </li>
            ))}
          </ul>
        )}
      </SectionContainer>

      <SectionContainer title="ĐIỆN THOẠI NỔI BẬT NHẤT 2022">
        <ul className="mb-4 mt-8 grid grid-cols-5">
          <li className="col-start-1 col-span-2 border">
            <img
              className="w-full h-auto"
              src={imgs.section_hot}
              alt="Section hot"
            />
          </li> 
          {phoneProductData?.products.map((product) => (
            <li key={product.id} className="border">
              <ProductCard product={product} outstanding={true} />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <section className="grid grid-cols-3 mt-16 gap-5">
        <img className="w-full" src={imgs.banner_coll_1_1} alt="Banner coll" />
        <img className="w-full" src={imgs.banner_coll_1_2} alt="Banner coll" />
        <img className="w-full" src={imgs.banner_coll_1_3} alt="Banner coll" />
      </section>

      <SectionContainer title="ĐỒNG HỒ THÔNG MINH 2022" seeAll={false}>
        <ul className="flex flex-wrap gap-3 mb-2">
          {MENU.map((element) => (
            <li key={element.title}>
              <Button>
                <Link to={element.link}>{element.title}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex">
          <div className="w-[25%]">
            <img
              className="w-full"
              src={imgs.section_product_tag_1_banner}
              alt="section product banner"
            />
          </div>

          <div className="w-[75%]">
            <Carousel>
              {smartWatchProductData?.products.map((product) => (
                <div key={product?.id} className="border">
                  <ProductCard product={product} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="mt-5">
          <Button
            className="bg-stone-300 text-gray-500 px-3 py-1 rounded-full hover:border-black border"
            mode="custom"
          >
            Apple watch
          </Button>{" "}
          <Button
            className="bg-stone-300 text-gray-500 px-3 py-1 rounded-full hover:border-black border"
            mode="custom"
          >
            Mi watch
          </Button>{" "}
          <Button
            className="bg-stone-300 text-gray-500 px-3 py-1 rounded-full hover:border-black border"
            mode="custom"
          >
            Samsung watch
          </Button>
        </div>
      </SectionContainer>

      <img
        src={imgs.section_hot_banner}
        className="w-full my-10"
        alt="Section hot banner"
      />

      <SectionContainer
        title="PHỤ KIỆN ĐIỆN THOẠI 2022 New"
        option={optionAccessory}
      >
        <ul className="mt-5 grid grid-cols-5">
          {accessoryProductData?.products.map((product) => (
            <li key={product?.id} className="border">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer title="ÂM THANH" option={optionSound}>
        <ul className="mt-5 grid grid-cols-5">
          {soundProductData?.products.map((product) => (
            <li className="border" key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer title="THƯƠNG HIỆU SẢN PHẨM" seeAll={false}>
        <ul className="mt-5 grid grid-cols-7">
          {imgs.trademark.map((tm, index) => (
            <li key={index}>
              <img src={tm} alt="Trademark" />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <section className="grid grid-cols-2 gap-10 mb-20">
        <SectionContainer
          className="bg-stone-100 rounded-xl p-5"
          title="24h CÔNG NGHỆ"
          path="/news"
        >
          <ul className="flex flex-col gap-4">
            {newsData?.news.map((newsItem) => (
              <li key={newsItem?.id}>
                <NewsCard newsItem={newsItem} />
              </li>
            ))}
          </ul>
        </SectionContainer>

        <SectionContainer
          className="bg-stone-100 rounded-xl p-5"
          title="KINH NGHIỆM HAY - MẸO VẶT"
        >
          <p>Đang cập nhật...</p>
        </SectionContainer>
      </section>
    </main>
  );
}

export default Home;
