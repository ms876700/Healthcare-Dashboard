export default function PatientTable({ patients }: any) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Name</th>
          <th className="p-2">Age</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>

      <tbody>
        {patients.map((p: any) => (
          <tr key={p.id} className="text-center border-t">
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.age}</td>
            <td className="p-2">{p.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}