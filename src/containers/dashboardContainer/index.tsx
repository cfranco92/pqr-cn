import React from "react";

import { Route, Routes } from "react-router-dom";

import DashboardDocuments from "./dashboardDocuments";
import DashboardHome from "./dashboardHome";
import DashboardProfile from "./dashboardProfile";

const DashboardContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="documents" element={<DashboardDocuments />} />
      <Route path="profile" element={<DashboardProfile />} />
    </Routes>
  );
};

export default DashboardContainer;
