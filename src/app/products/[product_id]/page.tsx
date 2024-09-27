import React from "react";

interface Params {
  params: {
    product_id: string;
  };
}

export default function ProductDetails({ params }: Params) {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <h1 className="text-red-700 text-[60px]">
        This is product details page {params.product_id}
      </h1>
    </div>
  );
}
