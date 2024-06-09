import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
const SendMoney = () => {
  const [amount, setAmount] = useState("");
  return (
    <div className="w-[30%]  rounded-lg p-10 border-2 border-grey-600 shadow-xl">
      <div className="mb-10">
        <h2 className="text-2xl text-center font-bold">Send Money</h2>
      </div>
      <div>
        <div>
          <div className="flex gap-4 p-2 items-center">
            <FaRegUser className="text-2xl font-semibold" />
            <h2 className="text-2xl font-semibold">User</h2>
          </div>
          <div className="p-2">
            <h4 className="mb-2">Amount (in Rs)</h4>
            <input
              type="text"
              placeholder="Enter Amount..."
              className="p-2 rounded-lg outline-none w-[100%] border-2 border-grey-600"
              onChange={(e)=>setAmount(e.target.value)}
            />
            <button className="bg-black text-white text-xl p-3 mt-4 rounded-lg w-[100%]">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SendMoney;
