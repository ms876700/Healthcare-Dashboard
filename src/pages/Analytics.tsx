import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", patients: 30 },
  { name: "Feb", patients: 45 },
  { name: "Mar", patients: 60 },
  { name: "Apr", patients: 50 },
];

export default function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      <div className="bg-white p-6 rounded shadow">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="patients" stroke="#2563eb" />
        </LineChart>
      </div>
    </div>
  );
}