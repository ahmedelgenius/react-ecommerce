import React, { useRef } from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { RadioButton } from "primereact/radiobutton";

const PaymentMethod = () => {
  const toast = useRef(null);

  const radioBtns = [
    {
      id: "cash",
      name: "cash",
      value: "Payment when receiving",
      inputId: "f1",
    },
    {
      id: "card",
      name: "card",
      value: "Payment by credit card",
      inputId: "f2",
    },
  ];

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: formik.values.item,
    });
  };

  const formik = useFormik({
    initialValues: {
      item: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.item) {
        errors.item = "Value is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      data.item && show();
      formik.resetForm();
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  return (
    <>
      <div
        className="card flex justify-center items-center w-full lg:w-1/2 border-4 py-20 my-20"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center gap-2 w-full"
        >
          <div className="text-2xl font-bold pb-8">
            Choose the payment method.
          </div>
          <div className="flex flex-col  gap-5">
            <Toast ref={toast} />
            {radioBtns.map((btn, i) => {
              return (
                <div key={i} className="flex items-center mr-3">
                  <RadioButton
                    {...btn}
                    checked={formik.values.item === btn.value}
                    onChange={(e) => {
                      formik.setFieldValue("item", e.value);
                    }}
                  />
                  <label
                    htmlFor={btn.inputId}
                    className="ml-1  text-xl font-bold "
                  >
                    {btn.value}
                  </label>
                </div>
              );
            })}
          </div>
          {getFormErrorMessage("item")}
          <div className="flex items-center justify-evenly w-full py-5">
            <Button
              type="submit"
              className="bg-indigo-600 w-1/2"
              label="Checkout"
            />
            <p className="border-2 px-2 py-3 font-semibold">
              <span className="font-bold"> Order Total : </span> 1234$
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentMethod;
