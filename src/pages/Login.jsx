import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const { loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          // onClick={() => navigate("/admin")}
          onClick={() => loginUser(email, password)}
        >
          Login
        </button>
        <br />
        <p>
          click here to{" "}
          <Link to={"/signup"} className="text-blue-600 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
