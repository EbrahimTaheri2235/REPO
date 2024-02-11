import { FC } from "react";
import Button from "../../components/Button";
import Textfield from "../../components/TextField";

const NewPassword: FC = () => {
  return (
    <>
      <div className="justify-center flex-col flex items-center mb-8 mt-16 mx-20">
        <h1 className="text-2xl font-semibold ">New Password</h1>
        <p className="mt-1  text-sm text-slate-500 justify-center flex items-center text-center">
          your new password must be diffrent from previosly used passwords.
        </p>
      </div>
      <div className="mx-2">
        <Textfield label="Password" />
        <Textfield label="Confirm Password" />
      </div>
      <div className="mx-4 mt-8">
        <Button variant="contained">Create New Password</Button>
      </div>
    </>
  );
};

export default NewPassword;
