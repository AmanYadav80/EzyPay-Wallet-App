import { FaRegUser } from "react-icons/fa";
const User = ({data}) => {
    const { firstName }=data;
  return (
    <div>
      <div className="flex justify-between items-center w-[80%] ml-4 p-6 pl-10 border-b-2 border-grey-600">
        <div className="flex gap-4">
          <FaRegUser className="text-3xl font-bold" />
          <h2 className="text-xl font-semibold">{firstName}</h2>
        </div>
        <button className="bg-black text-white font-semibold p-3 rounded-lg">
          Send Money
        </button>
      </div>
    </div>
  );
};
export default User;
