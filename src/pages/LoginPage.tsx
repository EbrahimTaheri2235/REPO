import { FC } from "react";
import Button from "../components/Button";
import TextField from "./../components/TextField";

const LoginPage: FC = () => {
  return (
    <>
      <div className="justify-center flex-col flex items-center m-16">
        <h1 className="text-2xl font-semibold ">Sign In</h1>
        <p className="mt-3  text-sm text-slate-500">
          Hi Wellcome back , you`ve been missed
        </p>
      </div>
      <form className="flex flex-col mr-3 ml-3" action="">
        <TextField placeholder="example@gmail.com" label="Email" />
        <TextField
          placeholder="*****************"
          label="Password"
          icon={
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
            </svg>
          }
        />
        <a
          href=""
          className="mb-6 ml-2 text-blue-600 dark:text-blue-500 underline text-sm font-semibold self-end  "
        >
          Fogot password?
        </a>
        <Button variant="contained">Sign In</Button>
        <div className="flex justify-center my-10">
          <p className="text-slate-300">____________</p>
          <p className="text-slate-500 text-sm"> or sign up with</p>
          <p className="text-slate-300">____________</p>
        </div>
        <div className="flex justify-center">
                
          <a className="border border-gray-200 rounded-full w-16 h-16 m-2 text-center inline-flex items-center" href="https://www.apple.com/">
            <svg
              className="ml-4"
              fill="#000000"
              height="28px"
              width="28px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22.773 22.773"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>{" "}
                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>{" "}
                  </g>{" "}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                  <g> </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          
          <a className="border border-gray-200 rounded-full w-16 h-16 m-2 text-center inline-flex items-center" href="https://www.google.com/">
            <svg
              className="ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
              id="google"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
          </a>
          <a className="border border-gray-200 rounded-full w-16 h-16 m-2 text-center inline-flex items-center" href="https://www.facebook.com/">
            <svg
              className="ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 16 16"
              id="facebook"
            >
              <path
                fill="#1976D2"
                fill-rule="evenodd"
                d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex mr-2 items-center justify-center m-5">
          <p className="text-sm">Don`t have an account?</p>
          <a
            href=""
            className="text-blue-600 dark:text-blue-500 font-semibold text-sm underline ml-1"
          >
            Sign Up
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
