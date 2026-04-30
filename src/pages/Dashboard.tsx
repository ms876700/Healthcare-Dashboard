// import { useEffect } from "react";
// import { auth } from "../services/firebase";
// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const sendNotification = async () => {
  if ("serviceWorker" in navigator) {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const registration = await navigator.serviceWorker.ready;

      registration.showNotification("🚑 Emergency Alert!", {
        body: "New emergency patient request received",
        icon: "/vite.svg", // optional
      });
    }
  }
};
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500">Total Patients</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500">Active Cases</h2>
          <p className="text-2xl font-bold">45</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500">Emergency</h2>
          <p className="text-2xl font-bold text-red-500">5</p>
        </div>
      </div>
      <button
        onClick={sendNotification}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Trigger Emergency Alert
      </button>
    </div>
  );
}
