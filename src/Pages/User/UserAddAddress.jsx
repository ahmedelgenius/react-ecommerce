import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
const UserAddAddress = () => {
  const [addressName, setAddressName] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [addressPhone, setAddressPhone] = useState(null);
  return (
    <div>
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl">Add New Address </h1>
      </div>
      <div className="flex flex-col gap-8 items-center   ">
        <div className="w-1/2">
          <span className="p-float-label  ">
            <InputText
              id="addressName"
              value={addressName}
              className="w-full"
              onChange={(e) => setAddressName(e.target.value)}
            />
            <label htmlFor="addressName">Address Name</label>
          </span>
        </div>
        <div className="card flex justify-content-center">
          <InputTextarea
            value={addressDetails}
            onChange={(e) => setAddressDetails(e.target.value)}
            placeholder="Address Details"
            rows={5}
            cols={60}
          />
        </div>
        <div className="w-1/2">
          <span className="p-float-label">
            <InputNumber
              id="address-phone"
              value={addressPhone}
              className="w-full"
              onValueChange={(e) => setAddressPhone(e.value)}
            />
            <label htmlFor="address-phone">Phone Number</label>
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button className="bg-gray-900 hover:bg-gray-800 px-10 py-3 rounded-lg text-white font-semibold ">
          Add Address
        </button>
      </div>
    </div>
  );
};

export default UserAddAddress;
