import { FC } from "react";
import Button from "../components/Button";
import Textfield from "./../components/TextField";

const CompleteProfile: FC = () => {
  return (
    <>
      <div className="justify-center flex-col flex items-center mb-8 mt-16 mx-12">
        <h1 className="text-2xl font-semibold ">Complete Your Profile</h1>
        <p className="mt-1  text-sm text-slate-500 justify-center flex items-center text-center">
          Don`t worry, only you can see your personal data. No one else will be
          able to see it.
        </p>
      </div>

      
      <div className="mx-2">
        <Textfield label="Name" />
        <Textfield label="Confirm Password" />
      </div>
      <div className="mx-4 mt-8">
        <Button variant="contained">Create New Password</Button>
      </div>
    </>
  );
};

export default CompleteProfile;
