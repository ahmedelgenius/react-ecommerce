import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import ReactStars from "react-rating-stars-component";
const RatePost = () => {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: form.getValues("description"),
    });
  };

  const defaultValues = { review: "" };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;

  const onSubmit = (data) => {
    data.review && show();

    form.reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="px-5">
      <div className="flex justify-center items-center gap-2">
        <p className="text-xl font-semibold">user name</p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={28}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </div>

      <div className="card flex justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <Toast ref={toast} />
          <Controller
            name="review"
            control={form.control}
            rules={{ required: "review is required." }}
            render={({ field, fieldState }) => (
              <>
                <label htmlFor={field.name}></label>
                <InputTextarea
                  id={field.name}
                  {...field}
                  rows={3}
                  cols={150}
                  placeholder="Write your review"
                  //   className={classNames({ "p-invalid": fieldState.error })}
                  className="w-full"
                />
                {getFormErrorMessage(field.name)}
              </>
            )}
          />
          <div className="flex justify-center items-center">
            <Button
              label="Submit"
              className="hover:opacity-90 w-1/4"
              style={{ backgroundColor: "#6366F1" }}
              type="submit"
              //   icon="pi pi-check"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatePost;
