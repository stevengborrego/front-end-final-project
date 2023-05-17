import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Weather from "./routes/Weather";
import Photos from "./routes/Photos";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/weather" element={
          <Weather />
        } />
        <Route path="/photos" element={
          <Photos />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;