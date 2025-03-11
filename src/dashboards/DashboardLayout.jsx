import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const DashboardLayout = ({ children }) => {
  const { currentUser } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold text-red-500">Gym Dashboard</h2>
        <nav className="mt-6">
          <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard Home
          </Link>
          {currentUser.role === "admin" && (
            <>
              <Link
                to="/dashboard/members"
                className="block py-2 px-4 hover:bg-gray-700"
              >
                Manage Members
              </Link>
              <Link
                to="/dashboard/plans"
                className="block py-2 px-4 hover:bg-gray-700"
              >
                Manage Plans
              </Link>
            </>
          )}
          {currentUser.role === "member" && (
            <Link
              to="/dashboard/progress"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              My Progress
            </Link>
          )}
          {currentUser.role === "user" && (
            <Link
              to="/dashboard/upgrade"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Upgrade Plan
            </Link>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
