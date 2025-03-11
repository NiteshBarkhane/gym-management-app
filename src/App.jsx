import { Home, Login, Signup, About, Gallery, Pricing, Contact } from "./pages";
import { AdminDashboard, MemberDashboard } from "./dashboards";
import { AuthContextProvider, useAuth } from "./context/authContext";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const DashboardRedirect = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return <Navigate to="/" />;
  if (currentUser.role === "admin") return <AdminDashboard />;
  if (currentUser.role === "member") return <MemberDashboard />;
};

function App() {
  return (
    <AuthContextProvider>
      <div className="bg-gray-800 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashboardRedirect />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
