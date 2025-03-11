const MemberDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-5">🏋️ Gym Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded">🏠 Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">💪 Workouts</li>
          <li className="hover:bg-gray-700 p-2 rounded">🥗 Diet Plans</li>
          <li className="hover:bg-gray-700 p-2 rounded">📅 Class Booking</li>
          <li className="hover:bg-gray-700 p-2 rounded">📊 Progress</li>
          <li className="hover:bg-gray-700 p-2 rounded">⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Profile Card */}
        <div className="bg-white p-5 rounded-lg shadow-md flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">Member Name</h3>
            <p className="text-gray-600">🏅 Membership Plan</p>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Membership Card */}
          <div className="bg-blue-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Membership</h3>
            <p>Expires: 30th June 2025</p>
          </div>

          {/* Workout Plan */}
          <div className="bg-green-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Workout Plan</h3>
            <p>Current: Strength Training</p>
          </div>

          {/* Diet Plan */}
          <div className="bg-red-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Diet Plan</h3>
            <p>Calories: 2500/day</p>
          </div>

          {/* Class Booking */}
          <div className="bg-yellow-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Class Booking</h3>
            <p>Next: Yoga (5 PM, Friday)</p>
          </div>

          {/* Progress Tracker */}
          <div className="bg-purple-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Progress</h3>
            <p>Weight: 75kg → 72kg</p>
          </div>

          {/* Notifications */}
          <div className="bg-gray-700 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Notifications</h3>
            <p>🏆 30-day streak achieved!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemberDashboard;
