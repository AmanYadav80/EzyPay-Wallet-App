import { BrowserRouter, Routes,Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import DashBoard from "./components/Dashboard";
import Send from "./components/Send";
function App() {
  return (
    <div className="bg-[#a09e9e] w-screen h-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/send" element={<Send/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
