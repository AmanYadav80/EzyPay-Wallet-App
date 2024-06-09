import { useState, useEffect } from "react";
const Balance = () => {
  const [balance, setBalance] = useState("");
  const getBalance = async () => {
    const token = localStorage.getItem("jwtToken");
    const response = await fetch(
      "http://localhost:3000/api/v1/account/balance",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const balanceData = await response.json();
    setBalance(balanceData.balance);
  };
  useEffect(() => {
    getBalance();
  }, []);
  return (
    <div>
      <div className="w-[100%] pt-10 pl-6 pb-1">
        <h2 className="text-2xl font-bold">Your Balance:{balance}</h2>
      </div>
    </div>
  );
};
export default Balance;
