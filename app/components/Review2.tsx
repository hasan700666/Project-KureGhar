"use client";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// Define the props interface for better type safety
interface ReviewData {
  image?: string;
  user_name?: string;
  review_text?: string;
  // Add other fields if they exist in your comments.json
}

interface Review2Props {
  data: ReviewData;
}

const Review2 = ({ data }: Review2Props) => {
  return (
    <div className="flex justify-between gap-3 my-10 shadow-2xl p-6 rounded-2xl py-8 items-center min-w-[300px]">
      <div className="w-10 flex-shrink-0">
        {data.image ? (
          <Image
            src={data.image}
            alt={data.user_name || "Customer"}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
        )}
      </div>

      <div className="flex-1">
        <div className="font-bold mb-3">{data.user_name || "Anonymous"}</div>
        
        <div className="flex gap-2 text-gray-700">
          <FaQuoteLeft className="text-amber-400 mt-1 flex-shrink-0" />
          <p>{data.review_text || "No review text provided."}</p>
        </div>
      </div>
    </div>
  );
};

export default Review2;