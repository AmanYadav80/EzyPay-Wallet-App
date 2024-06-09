import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className=" h-[12%] w-[100%] p-8 flex flex-row justify-between items-center border-b-2 border-grey-600">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-4xl font-bold">E</span>zy
            <span className="text-4xl font-bold">P</span>ay
          </h1>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <h2 className="text-xl font-semibold cursor-pointer underline">
            Hello User
          </h2>
          <FaRegUser className="text-3xl font-bold cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Header;
