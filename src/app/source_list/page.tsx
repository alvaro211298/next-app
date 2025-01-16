import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      status: "pending",
      description: "Esta es la discripcion del problema",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 w-1/2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
