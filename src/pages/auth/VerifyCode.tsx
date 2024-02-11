import { FC } from "react";
import Button from "../../components/Button";

const VerifyCode: FC = () => {
  return (
    <>
      <div className="justify-center flex-col flex items-center mt-16 ">
        <h1 className="text-2xl font-semibold ">Verify Code</h1>
        <div className="flex items-center flex-col">
          <p className="mt-3  text-xs text-slate-500 justify-center flex items-center">
            Please enter the code we just sent to email
          </p>
          <p
            className="text-sm font-bold text-blue-700 dark:text-blue-500"
          >
            example@email.com
          </p>
        </div>
      </div>
      <div className="flex justify-center my-9">
        <input value="2" className="bg-slate-200 w-16 h-12 m-2 rounded-xl hover:outline-slate-300 text-center"></input>
        <input value="8" className="bg-slate-200 w-16 h-12 m-2 rounded-xl hover:outline-slate-300 text-center"></input>
        <input value="-" className="bg-slate-200 w-16 h-12 m-2 rounded-xl hover:outline-slate-300 text-center"></input>
        <input value="-" className="bg-slate-200 w-16 h-12 m-2 rounded-xl hover:outline-slate-300 text-center"></input>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-slate-500">Didn`t receive OTP?</p>
        <a href="" className="text-sm underline font-medium">
          Resend code
        </a>
      </div>
      <div className="mx-4 mt-8">
        <Button variant="contained">Verify</Button>
      </div>
      
    </>
  );
};

export default VerifyCode;
