import { Routes, Route } from "react-router-dom";

import { Store } from "@/pages/Store";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
    </Routes>
  );
}
