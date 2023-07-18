import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

import uploadImg from "../../assets/images/upload.png";
const AdminAddSubCategory = () => {
  const [value, setValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { label: "Category One", value: "Category One" },
    { label: "Category Two", value: "Category Two" },
    { label: "Category Three", value: "Category Three" },
  ];
  return (
    <>
      <div className="container mx-auto">
        <div className="pl-5 mb-10 ">
          <h1 className="font-bold text-xl">Add SubCategory</h1>
        </div>

        <div className="flex flex-col gap-5 items-center   ">
          <div className="w-1/2">
            <span className="p-float-label  ">
              <InputText
                id="subCategory"
                value={value}
                className="w-full"
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="subCategory">SubCategory Name</label>
            </span>
          </div>
          <div className="w-1/2">
            <Dropdown
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={items}
              virtualScrollerOptions={{ itemSize: 38 }}
              placeholder="Category One"
              className="w-full  md:w-14rem"
            />
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

export default AdminAddSubCategory;
