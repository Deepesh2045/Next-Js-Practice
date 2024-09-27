import React from "react";

interface Params {
  params: {
    review_id: string;
    product_id: string;
  };
}

export default function ReviewIdDetails({ params }: Params) {
  return (
    <div className="bg-customBlue h-screen flex items-center justify-center">
      <h1 className="text-red-700 text-[60px]">
        This is review {params.review_id} for product {params.product_id}
      </h1>
    </div>
  );
}
