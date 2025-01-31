import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
