import { FC } from "react";
import TextField from "./../../components/TextField";
import Button from "./../../components/Button";

const AddCard: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-12 mb-6">
        <p className="font-semibold">Add Card</p>
      </div>
      <div className="flex justify-center m-5">
        <div className="bg-blue-500 relative w-96 h-48 rounded-xl flex flex-col justify-end"></div>
      </div>
      <div className="p-4">
        <TextField label="Card Holder Name" placeholder="your name" />
        <TextField label="Card Number" placeholder="5555 5555 5555 5555" />
        <div className="flex items-center">
          <TextField label="Expiry Date" placeholder="01/01" />
          <TextField label="CVV" placeholder="000" />
        </div>
        <div className="flex items-center pl-3">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
          />
          <label className="ms-2 text-sm font-medium text-gray-900 ">
            Save Card
          </label>
        </div>
      </div>
      <Button variant="contained">Add Card</Button>

    </>
  );
};

export default AddCard;
