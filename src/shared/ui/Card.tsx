export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
}
