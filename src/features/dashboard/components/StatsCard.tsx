import Card from "@/shared/ui/Card";

type Props = {
  title: string;
  value: string | number;
};

export default function StatsCard({ title, value }: Props) {
  return (
    <Card>
      <h2 className="text-sm text-gray-500 dark:text-gray-400">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </Card>
  );
}
