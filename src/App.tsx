import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import VerifyCode from "./pages/VerifyCode";
import NewPassword from "./pages/ChangePassword";
import CompleteProfile from "./pages/CompleteProfile";

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
        path:"/auth/newpassword",
        element:<NewPassword/>
      },
      {
        path:"/auth/completeprofile",
        element:<CompleteProfile/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
