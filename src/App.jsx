export default function App() {
  const students =[
    { id: 1, name: "Sokha", grade: "10", email: "sokha@test.com"},
    { id: 2, name: "Dara", grade: "11", email: "dara@test.com"},
    { id: 3, name: "Vanna", grade: "12", email: "vanna@test.com"}
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3x1">
        <h1 className="mb-6 text-3x1 font-bold text-gray-800 text-center">
          Student Management
        </h1>
        <table className="w-full overflow-hidden rounded bg-white shadow">
          <thead className="bg-gray-800 text-left text-white">
            <tr>
              <th  className="p-3">Name</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Email</th>
            </tr>

          </thead>
          <tbody>
            {students.map((students)=>(
              <tr key={students.id} className="border-t">
                <td className="p-3">{students.name}</td>
                <td className="p-3">{students.grade}</td>
                <td className="p-3">{students.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}