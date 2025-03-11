import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Signup = () => {
  const { signupUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Set password"
          className="w-full p-2 border mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-4">
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={() => signupUser(email, password, role)}
        >
          Sign Up
        </button>
        <br />
        <p>
          Already have account, get &nbsp;
          <Link to={"/login"} className="text-blue-600 underline">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
