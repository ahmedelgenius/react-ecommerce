import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
const UserProfile = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="container mx-auto ">
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl">My Profile</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-3  mx-5">
        <div className="bg-slate-200 pb-8 pt-3 relative px-5 rounded-lg">
          <div className="flex flex-col ">
            <p className="text-lg font-semibold pb-5">
              {" "}
              Name : <span className="text-gray-600">Ahmed Hany</span>
            </p>
            <p className="text-lg font-semibold pb-5">
              {" "}
              Phone Number : <span className="text-gray-600">012345679</span>
            </p>
            <p className="text-lg font-semibold ">
              {" "}
              Email : <span className="text-gray-600">example@gmail.com</span>
            </p>
          </div>
          <div className="absolute right-8 top-3 flex gap-10">
            <button class="font-medium text-lg text-indigo-500 hover:text-indigo-500">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 ">
        <div className="pl-5 mb-5 flex justify-center">
          <h1 className="font-bold text-xl">Change Password </h1>
        </div>

        <div className="flex flex-col gap-8 items-center   ">
          <div className="w-1/2">
            <span className="p-float-label  ">
              <InputText
                id="oldPassword"
                value={oldPassword}
                className="w-full"
                type="password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <label htmlFor="oldPassword">Old Password</label>
            </span>
          </div>
          <div className="w-1/2">
            <span className="p-float-label  ">
              <InputText
                id="newPassword"
                value={newPassword}
                className="w-full"
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label htmlFor="newPassword">New Password</label>
            </span>
          </div>

          <button className="bg-gray-900 hover:bg-gray-800 px-10 py-3 rounded-lg text-white font-semibold">
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
