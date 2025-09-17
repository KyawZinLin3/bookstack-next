import Button from "@/shared/ui/Button";
import ThemeToggle from "@/features/theme/components/ThemeToggle";

export default function BookHeader() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold">Book</h1>
      <div className="flex gap-2">
        <Button variant="primary">Create</Button>
        {/* <Button variant="secondary">Settings</Button> */}
        <ThemeToggle />
      </div>
    </header>
  );
}
