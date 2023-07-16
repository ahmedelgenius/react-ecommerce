import React from "react";
import ReactStars from "react-rating-stars-component";

const RateItem = () => {
  return (
    <div className="border-b-2 py-6 ">
      <div className="flex gap-2 items-center">
        <p className="text-xl font-semibold">user name </p>
        <ReactStars
          count={5}
          size={25}
          edit={false}
          value={4}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
        recusandae. Explicabo ullam sapiente perferendis voluptatibus fugit
        recusandae. Explicabo ullam sapiente perferendis voluptatibus fugit
        recusandae. Explicabo ullam sapiente perferendis voluptatibus fugit
        recusandae. Explicabo ullam sapiente perferendis voluptatibus fugit
      </p>
    </div>
  );
};

export default RateItem;
