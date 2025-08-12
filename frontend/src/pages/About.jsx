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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            adipisci, molestiae excepturi voluptas quia delectus modi. Ad earum
            iure quo ut totam expedita, nisi dolorem neque, doloribus, dolorum
            maiores minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia
            porro veritatis autem debitis impedit excepturi culpa accusamus rem
            possimus temporibus incidunt atque accusantium, similique expedita
            alias eum necessitatibus quod?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            totam hic placeat sunt natus cumque modi possimus porro magni
            accusantium aut veniam explicabo nisi quas voluptas ipsum, amet
            sapiente a?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eligendi suscipit ab vitae accusantium! Molestiae illo maiores natus
            corrupti quas quidem, amet, itaque omnis, qui inventore sit dolorum
            adipisci nesciunt.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eligendi suscipit ab vitae accusantium! Molestiae illo maiores natus
            corrupti quas quidem, amet, itaque omnis, qui inventore sit dolorum
            adipisci nesciunt.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eligendi suscipit ab vitae accusantium! Molestiae illo maiores natus
            corrupti quas quidem, amet, itaque omnis, qui inventore sit dolorum
            adipisci nesciunt.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
