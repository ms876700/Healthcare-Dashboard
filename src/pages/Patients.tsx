import { useState } from "react";
import { patients } from "../data/patients";
import PatientCard from "../components/PatientCard";
import PatientTable from "../components/PatientTable";

export default function Patients() {
  const [view, setView] = useState<"grid" | "list">("grid");

  if (!patients.length)
  return <p className="text-center mt-10">No patients found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Patients</h1>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setView("grid")}
          className={`px-4 py-2 rounded ${
            view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Grid
        </button>

        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 rounded ${
            view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          List
        </button>
      </div>
      {view === "grid" ? (
        <div className="grid grid-cols-3 gap-4">
          {patients.map((p) => (
            <PatientCard key={p.id} patient={p} />
          ))}
        </div>
      ) : (
        <PatientTable patients={patients} />
      )}
    </div>
  );
}
