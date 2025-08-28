import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description"); // toggle state

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Static content
  const descriptionContent = `
    This premium product from our Forever collection is crafted with the highest quality materials.
    It offers unmatched comfort, durability, and style. Perfect for everyday use or special occasions.
    Enjoy an exceptional shopping experience with our 100% original products.
  `;

  const reviewsContent = [
    {
      name: "Alice",
      rating: 5,
      comment: "Absolutely love this product! Excellent quality and fast delivery."
    },
    {
      name: "John",
      rating: 4,
      comment: "Great value for money. Slightly smaller than expected, but still satisfied."
    },
    {
      name: "Maria",
      rating: 5,
      comment: "Amazing! I would definitely buy again."
    },
  ];

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:gap-12 sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0"
                alt={`Product ${index}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt={productData.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} className="w-3" src={assets.star_icon} alt="" />
            ))}
            <img className="w-3" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 font-medium text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`bg-gray-100 border py-2 px-4 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-5 py-3 text-sm font-medium ${
              activeTab === "description" ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-3 text-sm font-medium ${
              activeTab === "reviews" ? "border-b-2 border-black" : "text-gray-500"
            }`}
          >
            Reviews
          </button>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          {activeTab === "description" && <p>{descriptionContent}</p>}
          {activeTab === "reviews" &&
            reviewsContent.map((review, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-medium">{review.name}</p>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <img key={i} className="w-3" src={assets.star_icon} alt="" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <img key={i} className="w-3" src={assets.star_dull_icon} alt="" />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
        </div>
      </div>

      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
