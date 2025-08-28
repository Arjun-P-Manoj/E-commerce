import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col text-gray-600 justify-center gap-6 md:w-2/4">
          <p>
            Welcome to Forever, your one-stop destination for the latest trends
            and timeless essentials. We strive to bring high-quality products
            that inspire confidence, comfort, and style to your everyday life.
          </p>
          <p>
            Founded with a passion for fashion and customer satisfaction, our
            goal is to make shopping a seamless and enjoyable experience. Every
            product is carefully selected to meet the highest standards.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide our customers with exceptional products,
            unbeatable quality, and outstanding service. We aim to make every
            shopping experience memorable and fulfilling.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We guarantee top-notch quality for every product in our store. Each
            item is carefully curated and tested to ensure it meets our strict
            quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Shopping with Forever is simple and hassle-free. Enjoy easy
            navigation, fast checkout, and reliable delivery right to your
            doorstep.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our dedicated support team is always here to help. We prioritize
            your satisfaction and strive to provide quick, friendly, and
            effective assistance.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
