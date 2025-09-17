import BookHeader from "@/features/books/components/BookHeader";
import Sidebar from "@/features/dashboard/components/Sidebar";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
       <BookHeader></BookHeader>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
