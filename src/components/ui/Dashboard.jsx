// Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      {/* Add your dashboard content here */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Example Cards */}
        <div className="p-4 border rounded shadow">Card 1</div>
        <div className="p-4 border rounded shadow">Card 2</div>
        <div className="p-4 border rounded shadow">Card 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
