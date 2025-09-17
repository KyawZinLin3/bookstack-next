import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import StatsCard from "@/features/dashboard/components/StatsCard";
import Container from "@/shared/ui/Container";

export default function DashboardPage() {
  return (
    <>
      {/* <DashboardHeader /> */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <StatsCard title="Users" value="1,245" />
          <StatsCard title="Revenue" value="$12,340" />
          <StatsCard title="Growth" value="14%" />
        </div>
      </Container>
    </>
  );
}
