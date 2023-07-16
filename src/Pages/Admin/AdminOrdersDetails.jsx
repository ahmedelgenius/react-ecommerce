import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import AdminAllOrdersItem from "../../Components/Admin/AdminAllOrdersItem";
const items = [
  { label: "Under way", value: "Under way" },
  { label: "Been completed", value: "Been completed" },
  { label: "Cancel", value: "Cancel" },
];
const AdminOrdersDetails = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="container mx-auto ">
      <div className="pl-5 mb-5">
        <h1 className="font-bold text-xl"> Order Details No : #23487</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-3  mx-5">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </div>

      <div
        className="mx-10 py-20 px-10 "
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div>
          <h2 className="font-semibold text-lg pb-3">Customer Details:</h2>
          <p className=" text-base">
            <span className="font-medium">Name: </span> Ahmed Hany
          </p>
          <p className=" text-base py-2">
            <span className="font-medium">Phone Number: </span>
            01234325325
          </p>
          <p className=" text-base">
            <span className="font-medium">Email: </span>
            email@gamil.com
          </p>
        </div>

        <div className="flex justify-center py-5 mt-5 border-y-2 ">
          <p className="text-lg font-medium ">Total Order : 400$</p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-gray-900 px-5 py-3 mr-1 rounded-lg text-white">
            Save
          </button>

          <Dropdown
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={items}
            virtualScrollerOptions={{ itemSize: 38 }}
            placeholder="Order Status"
            className=" w-1/2 md:w-14rem"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersDetails;
