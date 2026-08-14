import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Tasks from "./pages/Tasks/Tasks";
import Employees from "./pages/Employees/Employees";
import Requests from "./pages/Requests/Requests";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "projects", element: <Projects /> },
      { path: "tasks", element: <Tasks /> },
      { path: "employees", element: <Employees /> },
      { path: "requests", element: <Requests /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);