import Sidebar from "@/features/dashboard/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">{children}</main>
    </div>
  );
}
