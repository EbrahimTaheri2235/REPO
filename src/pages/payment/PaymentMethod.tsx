import { FC } from "react";

const PaymentMethod: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-12 mb-6">
        <p className="font-semibold">Payment Methods</p>
      </div>
      <div className="m-4">
        <div className="mb-5">
          <p className="font-bold m-1">Credit & Debit Card</p>
          <ul className=" shadow-2xl flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-200">
              <div className="flex items-center ps-3">
                <svg
                  fill="#0f58eb"
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352.07 352.07"
                  stroke="#0f58eb"
                  stroke-width="0.003520690000000001"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.704138"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M337.102,56.035H14.968C6.714,56.035,0,62.749,0,71.001v39.147v61.6v109.32c0,8.252,6.714,14.966,14.968,14.966h322.134 c8.253,0,14.968-6.714,14.968-14.966v-109.32v-61.6V71.001C352.069,62.749,345.355,56.035,337.102,56.035z M56.535,251.763h-15v-47 h15V251.763z M86.535,251.763h-15v-47h15V251.763z M116.535,251.763h-15v-47h15V251.763z M278.777,258.997 c-5.521,0-10.826-1.651-15.315-4.714c-4.489,3.062-9.795,4.714-15.316,4.714c-15.02,0-27.239-12.22-27.239-27.241 c0-15.021,12.219-27.241,27.239-27.241c5.521,0,10.827,1.651,15.316,4.714c4.489-3.063,9.794-4.714,15.315-4.714 c15.021,0,27.242,12.22,27.242,27.241C306.02,246.776,293.799,258.997,278.777,258.997z M342.069,161.749H10v-41.6h332.069V161.749 z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <label className="w-full py-3 text-sm font-medium dark:text-gray-500 ms-3">
                  Add New Card
                </label>
                <input
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-6 h-6 text-blue-600 me-2 bg-gray-100 border-gray-200 focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold m-1">More Payment Option</p>
          <ul className=" shadow-2xl flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-200">
              <div className="flex items-center ps-3">
                <svg
                  width="26px"
                  height="26px"
                  viewBox="-23 0 302 302"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M217.168476,23.5070146 C203.234077,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.3030619,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.076601 C-0.637664968,263.946149 3.13311322,268.357876 8.06925331,268.357876 L65.804612,268.357876 L80.3050438,176.385849 L79.8555471,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.46841,167.970272 C174.366398,167.970272 216.569147,146.078116 228.897012,82.7490197 C229.263268,80.8761167 229.579581,79.0531577 229.854273,77.2718188 C228.297683,76.4477414 228.297683,76.4477414 229.854273,77.2718188 C233.525163,53.8646924 229.829301,37.9325302 217.168476,23.5070146"
                      fill="#27346A"
                    ></path>
                    <path
                      d="M102.396976,68.8395929 C103.936919,68.1070797 105.651665,67.699203 107.449652,67.699203 L180.767565,67.699203 C189.449511,67.699203 197.548776,68.265236 204.948824,69.4555699 C207.071448,69.7968545 209.127479,70.1880831 211.125242,70.6375799 C213.123006,71.0787526 215.062501,71.5781934 216.943728,72.1275783 C217.884341,72.4022708 218.808307,72.6852872 219.715624,72.9849517 C223.353218,74.2002577 226.741092,75.61534 229.854273,77.2718188 C233.525163,53.8563683 229.829301,37.9325302 217.168476,23.5070146 C203.225753,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.2947379,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.068277 C-0.637664968,263.946149 3.13311322,268.349552 8.0609293,268.349552 L65.804612,268.349552 L95.8875974,77.5798073 C96.5035744,73.6675208 99.0174265,70.4627756 102.396976,68.8395929 Z"
                      fill="#27346A"
                    ></path>
                    <path
                      d="M228.897012,82.7490197 C216.569147,146.069792 174.366398,167.970272 120.46841,167.970272 L93.0241367,167.970272 C86.4398419,167.970272 80.8794007,172.764903 79.8555471,179.265958 L61.8174095,293.621258 C61.1431644,297.883153 64.4394738,301.745495 68.7513129,301.745495 L117.421821,301.745495 C123.182038,301.745495 128.084882,297.550192 128.983876,291.864891 L129.458344,289.384335 L138.631407,231.249423 L139.222412,228.036354 C140.121406,222.351053 145.02425,218.15575 150.784467,218.15575 L158.067979,218.15575 C205.215193,218.15575 242.132193,199.002194 252.920115,143.605884 C257.423406,120.456802 255.092683,101.128442 243.181019,87.5519756 C239.568397,83.4399129 235.081754,80.0437153 229.854273,77.2718188 C229.571257,79.0614817 229.263268,80.8761167 228.897012,82.7490197 L228.897012,82.7490197 Z"
                      fill="#2790C3"
                    ></path>
                    <path
                      d="M216.952052,72.1275783 C215.070825,71.5781934 213.13133,71.0787526 211.133566,70.6375799 C209.135803,70.1964071 207.071448,69.8051785 204.957148,69.4638939 C197.548776,68.265236 189.457835,67.699203 180.767565,67.699203 L107.457976,67.699203 C105.651665,67.699203 103.936919,68.1070797 102.4053,68.8479169 C99.0174265,70.4710996 96.5118984,73.6675208 95.8959214,77.5881313 L80.3133678,176.385849 L79.8638711,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.476734,167.970272 C174.374722,167.970272 216.577471,146.078116 228.905336,82.7490197 C229.271592,80.8761167 229.579581,79.0614817 229.862597,77.2718188 C226.741092,75.623664 223.361542,74.2002577 219.723948,72.9932757 C218.816631,72.6936112 217.892665,72.4022708 216.952052,72.1275783"
                      fill="#1F264F"
                    ></path>
                  </g>
                </svg>

                <label className="w-full py-3 text-sm font-medium dark:text-gray-500 ms-3 ">
                  PayPal
                </label>
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-6 h-6 text-blue-600 me-2 bg-gray-100 border-gray-200 focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-200">
              <div className="flex items-center ps-3">
                <svg
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
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <label className="w-full py-3  text-sm font-medium dark:text-gray-500 ms-3">
                  Apple Pay
                </label>
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-6 h-6 text-blue-600 me-2 bg-gray-100 border-gray-200 focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;