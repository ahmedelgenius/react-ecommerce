import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import uploadImg from "../../assets/images/upload.png";
const AdminAddBrand = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="container mx-auto">
        <div className="pl-5 mb-10 ">
          <h1 className="font-bold text-xl">Add Brand</h1>
        </div>
        <div className="flex flex-col mb-6 justify-center items-center">
          <p className="font-semibold text-base pb-3 mr-7">Brand Image</p>
          <div>
            {" "}
            <img src={uploadImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center   ">
          <div className="w-1/2">
            <span className="p-float-label  ">
              <InputText
                id="brandName"
                value={value}
                className="w-full"
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="brandName">Brand Name</label>
            </span>
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

export default AdminAddBrand;
