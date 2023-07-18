import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { ColorPicker } from "primereact/colorpicker";
import Multiselect from "multiselect-react-dropdown";
import uploadImg from "../../assets/images/upload.png";
import addImg from "../../assets/images/add.png";
const AdminAddProducts = () => {
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [priceBeforeValue, setPriceBeforeValue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [color, setColor] = useState(null);
  const colors = {
    color1: "#000000",
    color2: "#e35",
    color3: "#c3c5c3",
  };
  const items = [
    { label: "Category One", value: "Category One" },
    { label: "Category Two", value: "Category Two" },
    { label: "Category Three", value: "Category Three" },
  ];
  const onSelect = () => {};
  const onRemove = () => {};

  const options = [
    { name: "Category One", id: 1 },
    { name: "Category Two", id: 2 },
    { name: "Category Three", id: 2 },
  ];
  return (
    <>
      <div className="container mx-auto">
        <div className="pl-5 mb-10 ">
          <h1 className="font-bold text-xl">Add New Product</h1>
        </div>
        <div className="flex flex-col mb-6 justify-center items-center">
          <p className="font-semibold text-base pb-3 mr-7">Product Image</p>
          <div>
            {" "}
            <img src={uploadImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center   ">
          <div className="w-1/2">
            <span className="p-float-label  ">
              <InputText
                id="productName"
                value={nameValue}
                className="w-full"
                onChange={(e) => setNameValue(e.target.value)}
              />
              <label htmlFor="productName">Product Name</label>
            </span>
          </div>
          <div className="card flex justify-content-center">
            <InputTextarea
              value={descValue}
              onChange={(e) => setDescValue(e.target.value)}
              placeholder="Product Description"
              rows={5}
              cols={60}
            />
          </div>
          <div className="w-1/2">
            <span className="p-float-label">
              <InputNumber
                id="number-input"
                value={priceBeforeValue}
                className="w-full"
                onValueChange={(e) => setPriceBeforeValue(e.value)}
              />
              <label htmlFor="number-input">Price Before Discount</label>
            </span>
          </div>
          <div className="w-1/2">
            <Dropdown
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={items}
              virtualScrollerOptions={{ itemSize: 38 }}
              placeholder="Main Category "
              className="w-full  md:w-14rem"
            />
          </div>
          <div className="w-1/2">
            <Multiselect
              className=""
              placeholder="SubCategory"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              style={{ color: "red" }}
            />
          </div>
          <div className="w-1/2">
            <Dropdown
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.value)}
              options={items}
              virtualScrollerOptions={{ itemSize: 38 }}
              placeholder="Brand "
              className="w-full  md:w-14rem"
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <p className="text-base font-semibold mb-1 ">Available Colors</p>
            <div className=" flex gap-1 ">
              <p
                className="w-10 h-10 mt-1 rounded-full "
                style={{ backgroundColor: `${colors.color1}` }}
              ></p>
              <p
                className="w-10 h-10 mt-1 rounded-full "
                style={{ backgroundColor: `${colors.color2}` }}
              ></p>
              <p
                className="w-10 h-10 mt-1 rounded-full "
                style={{ backgroundColor: `${colors.color3}` }}
              ></p>
              <div className="flex ">
                <img
                  src={addImg}
                  className="w-10 h-11   rounded-full "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-gray-900 rounded-xl text-white px-7 py-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddProducts;
