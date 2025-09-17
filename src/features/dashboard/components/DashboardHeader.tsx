import Button from "@/shared/ui/Button";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-2">
        <Button variant="primary">New Report</Button>
        <Button variant="secondary">Settings</Button>
      </div>
    </header>
  );
}
