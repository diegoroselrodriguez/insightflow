import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <h1>InsightFlow</h1>

      <Outlet />
    </>
  );
}