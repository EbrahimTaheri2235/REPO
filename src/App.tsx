import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUp";
import VerifyCode from "./pages/auth/VerifyCode";
import NewPassword from "./pages/auth/ChangePassword";
import CompleteProfile from "./pages/auth/CompleteProfile";
import PaymentLayout from "./components/PaymentLayout";
import PaymentMethod from "./pages/payment/PaymentMethod";
import AddCard from "./pages/payment/AddCard";
import ReviewSummary from "./pages/payment/Review";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <SignUp />,
      },
      {
        path: "/auth/verify",
        element: <VerifyCode />,
      },
      {
        path: "/auth/newpassword",
        element: <NewPassword />,
      },
      {
        path: "/auth/completeprofile",
        element: <CompleteProfile />,
      },
    ],
  },
  {
    path: "/payment",
    element: <PaymentLayout />,
    children: [
      {
        path: "/payment/method",
        element: <PaymentMethod />,
      },
      {
        path: "/payment/addcard",
        element: <AddCard />,
      },
      {
        path: "/payment/review",
        element: <ReviewSummary />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
