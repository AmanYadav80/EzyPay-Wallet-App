import { BrowserRouter, Routes,Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import DashBoard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";
function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
