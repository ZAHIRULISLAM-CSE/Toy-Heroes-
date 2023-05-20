import { Rating } from "flowbite-react";
import React from "react";

const CustomerRatings = () => {
  return (
    <div className="mt-20 w-[85%]  mx-auto">
      <h1 className="text-3xl text-center mb-12">Customers Feedback For Us</h1>
      <div className="">
        <React.Fragment>
          <Rating className="mb-4">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 out of 5
            </p>
          </Rating>
          <p className="text-sm mb-4 font-medium text-gray-500 dark:text-gray-400">
            1,745 global ratings
          </p>
          <Rating.Advanced className="my-2" percentFilled={75}>
            5 star
          </Rating.Advanced>
          <Rating.Advanced className="my-2" percentFilled={12}>
            4 star
          </Rating.Advanced>
          <Rating.Advanced className="my-2" percentFilled={8}>
            3 star
          </Rating.Advanced>
          <Rating.Advanced className="my-2" percentFilled={4}>
            2 star
          </Rating.Advanced>
          <Rating.Advanced className="my-2" percentFilled={1}>
            1 star
          </Rating.Advanced>
        </React.Fragment>
      </div>
    </div>
  );
};

export default CustomerRatings;
