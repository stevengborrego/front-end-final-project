import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Photos from "./routes/Photos";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/dashboard" element={
          <Dashboard />
        } />
        <Route path="/photos" element={
          <Photos />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;