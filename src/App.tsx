import "./App.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import DashboardContainer from "./containers/dashboardContainer";
import LoginContainer from "./containers/loginContainer";
import React from "react";
import SignUpContainer from "./containers/signUpContainer";
import logo from "./logo.svg";
import { useAppSelector } from "./store";
import { userLoggedIn } from "./store/account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="dashboard/*"
        element={
          <RequireAuth>
            <DashboardContainer />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const userLoggedInSelector: boolean = useAppSelector(userLoggedIn);
  const location = useLocation();

  if (!userLoggedInSelector) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
