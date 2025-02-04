import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const AllProducts = () => {

  // Array of products with necessary details such as id, label, name, price, originalPrice, and image
  const products = [
    { 
      id: "1", 
      label: "New", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-01.png" 
    },
    { id: "2", 
      label: "Sale", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "$30", 
      img: "/images/product-02.png" 
    },
    { 
      id: "3", 
      label: "",
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-03.png" 
    },
    { 
      id: "4", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "",
      img: "/images/product-04.png"
    },
    { 
      id: "5", 
      label: "New", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-05.png" 
    },
    { id: "6", 
      label: "Sale", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "$30", 
      img: "/images/product-08.png" 
    },
    { 
      id: "7", 
      label: "Sale", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "$30", 
      img: "/images/product-09.png" 
    },
    { 
      id: "8", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-01.png" },
    { 
      id: "9", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "$30", 
      img: "/images/product-07.png" 
    },
    { id: "10", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-06.png" 
    },
    { 
      id: "11", 
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", 
      originalPrice: "", 
      img: "/images/product-03.png" 
    },
    { 
      id: "12" ,
      label: "", 
      name: "Library Stool Chair", 
      price: "$20", originalPrice: "", 
      img: "/images/product-02.png" 
    },
  ];

  const instagramImages = [
    "/images/product-06.png",
    "/images/product-05.png",
    "/images/product-02.png",
    "/images/product-01.png",
    "/images/product-04.png",
    "/images/product-07.png"
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-[#272343] mb-6">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-transparent group">
            <Link href={`/products/${product.id}`}>
              <div>
                <div className="w-full h-[312px] relative">
                  <Image
                    src={product.img}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className=" hover:scale-[1.03] transition-transform duration-300"
                  />
                  {product.label && (
                    <div
                      className={`absolute top-2 left-2 w-[49px] h-[26px] text-white text-xs font-semibold flex items-center justify-center rounded-lg ${
                        product.label === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                      }`}
                    >
                      {product.label}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h3 className="text-base font-bold text-[#272343] hover:text-[#029FAE] transition-colors duration-200 cursor-pointer">
                      {product.name}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold text-[#272343]">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  <button className="w-[44px] h-[44px] bg-[#F0F2F3] rounded flex items-center justify-center group-hover:bg-[#029FAE] transition-all duration-300">
                    <ShoppingCartIcon className="w-[22px] h-[22px] text-black" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    {/* Newsletter Input and Submit Button */}
      <div className="bg-gray-100 py-12 mt-20">
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#272343] mb-2 ">Subscribe to the Newsletter</h2>
          <div className="flex items-center justify-center gap-4 max-w-[400px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border-b-2 border-gray-500 focus:ring-0 focus:border-[#029FAE] outline-none bg-transparent"
            />
            <button className="px-6 py-2 text-[#272343] rounded-lg border-b-2 border-gray-500 hover:text-[#029FAE] hover:border-[#029FAE] focus:ring-0 transition-all">
              Submit
            </button>
          </div>
        </div>
      </div>

     {/* Instagram Grid */}
      <div className="bg-gray-100 text-center mt-[-20px]">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#272343] mb-6">Follow Products and Discounts on Instagram</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((img, index) => (
            <div key={index} className="hover:scale-[1.03] transition-transform duration-300">
              <Image
                src={img}
                alt={`Instagram ${index + 1}`}
                width={186}
                height={186}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;