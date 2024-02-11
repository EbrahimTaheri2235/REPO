import { FC } from "react";
import { Outlet } from "react-router-dom";

const PaymentLayout: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PaymentLayout;
