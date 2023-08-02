import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import ViewProductDetailsHook from "../../hook/product/view-product-details.hook";
import { useParams } from "react-router-dom";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  category: "mobile",
  brand: "iphone",
  //   images: [
  //     {
  //       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
  //       alt: "Two each of gray, white, and black shirts laying flat.",
  //     },
  //     {
  //       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
  //       alt: "Model wearing plain black basic tee.",
  //     },
  //     {
  //       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
  //       alt: "Model wearing plain gray basic tee.",
  //     },
  //     {
  //       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
  //       alt: "Model wearing plain white basic tee.",
  //     },
  //   ],
  colors: [
    { name: "red", class: "bg-red-500", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],

  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
};
const selectedClass = "ring-gray-500";
const ProductContent = () => {
  const { id } = useParams();
  const [item, images, category, brand, products] = ViewProductDetailsHook(id);
  // if (item) {
  //   console.log(item.colors);
  // }
  // console.log(images);
  // console.log(cat);
  const [selectedColor, setSelectedColor] = useState("");
  // console.log(selectedColor);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      {/* Product info */}
      {item ? (
        <div className="mx-auto ">
          <div className="flex flex-col gap-4 p-8 ">
            <h2 className="text-base font-medium text-gray-900">
              <span className="text-base  font-medium text-gray-900">
                Category :
              </span>{" "}
              {category ? category.name : null}
            </h2>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.title}
            </h1>
            <h2 className="text-base ">
              <span className="text-base  font-medium text-gray-900">
                Brand :{" "}
              </span>
              {brand ? brand.name : ""}
            </h2>
            <p className="text-3xl tracking-tight text-gray-900">
              <span className="text-base  font-medium text-gray-900">
                {/* Price :{" "} */}
              </span>
              {item.price}$
            </p>
            <form className="my-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color :</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {item.colors.length > 0
                      ? item.colors.map((color, index) => (
                          <RadioGroup.Option
                            key={index}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 rounded-full border border-black border-opacity-10"
                              style={{ backgroundColor: `${color}` }}
                            />
                          </RadioGroup.Option>
                        ))
                      : ""}
                  </div>
                </RadioGroup>
              </div>
            </form>
            <p>
              <span className="text-base font-medium text-gray-900 block pb-1">
                Description :
              </span>
              {item ? item.description : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-1/2 flex  justify-center ml-10 py-3 rounded-lg items-center bg-gray-700 hover:bg-gray-600 text-white">
              Add to Cart
            </button>
            <button className="py-2 px-3 flex justify-center items-center rounded-md hover:bg-gray-500 hover:text-white">
              <i className="pi pi-heart " style={{ fontSize: "1.5rem" }}></i>
            </button>
          </div>
          {/* Options */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductContent;
