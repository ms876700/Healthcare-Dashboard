export default function PatientCard({ patient }: any) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold">{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p
        className={`font-semibold ${
          patient.status === "Critical"
            ? "text-red-500"
            : patient.status === "Active"
              ? "text-blue-500"
              : "text-green-500"
        }`}
      >
        {patient.status}
      </p>
    </div>
  );
}
