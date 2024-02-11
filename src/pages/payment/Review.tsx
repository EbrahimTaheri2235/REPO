import { FC } from "react";
import Button from './../../components/Button';

const ReviewSummary: FC = () => {
  return (
    <>
      <div>
        <div>
          <img src="pic-num-1.jpg" alt="" />
        </div>
        <div></div>
      </div>
      <hr className="h-px m-8 bg-gray-200 border-0"></hr>
      <div className="flex flex-col m-5">
        <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-400">Language</p>
          <p className="font-semibold">English</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-400">Lessons</p>
          <p className="font-semibold">32</p>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold text-gray-400">Level</p>
          <p className="font-semibold">Begginer</p>
        </div>
      </div>
      <hr className="h-px m-8 bg-gray-200 border-0"></hr>
      <div className="flex flex-col m-5">
        <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-400">Amount</p>
          <p className="font-semibold">$180.00</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-400">Tax</p>
          <p className="font-semibold">$5.00</p>
        </div>
      </div>
      <hr className="h-px m-8 bg-gray-200 border-0"></hr>
      <div className="flex flex-col m-5">
        <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-400">Total</p>
          <p className="font-semibold">$185.0</p>
        </div>
      </div>
      <hr className="h-px m-8 bg-gray-200 border-0"></hr>
      <div className="flex flex-col m-5">
      <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-400">Paypal</p>
          <p className="font-semibold text-blue-500">Change</p>
        </div>
      </div>
      <Button variant="contained">Continue</Button>
    </>
  );
};

export default ReviewSummary;
