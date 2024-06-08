import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleFormSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        firstName,
        lastName,
        password,
      }),
    });
     if(response.ok){
      navigate('/dashboard');
     }
     else{
      navigate('/error');
     }
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[25%] p-6 bg-white border border-gray-200 rounded-lg shadow-lg ">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className=" w-[100%]">
            <div className="flex flex-col gap-2 mb-4 text-center justify-center items-center">
              <h5 className="text-3xl font-bold text-medium">Sign Up</h5>
              <p className="text-grey-400 font-light">
                Enter your information to create an account
              </p>
            </div>
            <div>
              <h4 className="text-[#1f1c1c] text-lg font-bold mb-1">
                First Name
              </h4>
              <input
                type="text"
                name="firstName"
                className="p-2 border-2 text-black border-[#363434] w-full rounded-lg"
                placeholder="John"
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <h4 className="text-[#1f1c1c] text-lg font-bold mb-1">
                Last Name
              </h4>
              <input
                type="text"
                name="lastName"
                className="p-2 border-2 text-black border-[#363434] w-full rounded-lg"
                placeholder="Doe"
                onChange={(e) => setlastName(e.target.value)}
                required
              />
            </div>
            <div>
              <h4 className="text-[#1f1c1c] text-lg font-bold mb-1">
                Email or Username
              </h4>
              <input
                type="email"
                name="email"
                className="p-2 border-2 text-black border-[#363434] w-full rounded-lg"
                placeholder="john@gmail.com"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <h4 className="text-[#1f1c1c] text-lg font-bold mb-1">
                Password
              </h4>
              <input
                type="password"
                name="password"
                className="p-2 border-2 text-black border-[#363434] w-full rounded-lg"
                placeholder="john@123"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white p-3 mt-6 mb-4 w-full rounded-lg"
                onClick={handleFormSubmit}
              >
                Signup
              </button>
              <p className="mb-4">
                Already have an account?
                <span className="underline cursor-pointer">Login</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
