import React from "react";
import ReviewCounter from "./ReviewCounter";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <p className="primary-subheading">Reviews</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ReviewCounter number={443} title="Customers" />
        <ReviewCounter number={1235} title="Successful Orders" />
        <ReviewCounter number={319} title="Reviews" />
      </div>
    </div>
  );
};

export default Reviews;
