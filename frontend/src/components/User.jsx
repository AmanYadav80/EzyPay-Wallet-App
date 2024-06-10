import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const User = ({ data }) => {
  const { firstName,_id } = data;
  const navigate=useNavigate();
  const handleSendMoneyClick=()=>{
    navigate('/send?id='+_id+'&name='+firstName);
  }
  return (
    <div>
      <div className="flex justify-between items-center w-[80%] ml-4 p-6 pl-10 border-b-2 border-grey-600">
        <div className="flex gap-4">
          <FaRegUser className="text-3xl font-bold" />
          <h2 className="text-xl font-semibold">{firstName}</h2>
        </div>
        <button className="bg-black text-white font-semibold p-3 rounded-lg"
         onClick={handleSendMoneyClick}
        >
          Send Money
        </button>
      </div>
    </div>
  );
};
export default User;
