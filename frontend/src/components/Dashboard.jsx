import Users from "./Users";
import Header from "./Header";
import Balance from "./Balance";
const DashBoard = () => {
  return (
    <div className="p-4 h-full w-full flex flex-col">
      <Header />
      <Balance />
      <Users />
    </div>
  );
};
export default DashBoard;
