import {  useState } from "react";
import User from "./User";
const Users = () => {
  const [searchUser, setSearchUser] = useState("");
  const [allUsers, setAllUsers] = useState(null);
  const handleSearchUser = async () => {
    const token = localStorage.getItem("jwtToken");
    const response = await fetch(
      `http://localhost:3000/api/v1/user/bulk?filter=${encodeURIComponent(
        searchUser
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setAllUsers(data.users);
    }
  };
  return (
    <div className="w-[100%] mx-auto">
      <div className="w-[100%]  p-6">
        <h2 className="text-2xl font-bold ml-1">Users</h2>
        <div>
          <input
            type="text"
            placeholder="Search users..."
            className="w-[80%] p-3 mt-4 mb-4 rounded-lg shadow-sm border-2 border-grey-700 outline-none"
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <button className="bg-black p-3 ml-2 rounded-lg text-white font-bold"
          onClick={handleSearchUser}
          >
            Search
          </button>
        </div>
      </div>
      {
        allUsers && allUsers.map((user)=>(
          <User key={user._id} data={user}/>
        ))
      }
    </div>
  );
};
export default Users;
