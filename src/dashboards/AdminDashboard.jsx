import { AddMember, MembersList } from "../components";

function AdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-100">Admin Dashboard</h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <AddMember />
        <MembersList />
      </div>
    </div>
  );
}

export default AdminDashboard;
