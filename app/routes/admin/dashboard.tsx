import StatsCard from "components/StatsCard";
import { Header } from "../../../components/indesx";

const dashboard = () => {
  const user = { name: "Abdullah" };
  const dashoboardStats = {
    totalUsers: 1260,
    usersJoined: {
      currentMonth: 120,
      lastMonth: 100,
    },
    totalTrips: 500,
    tripsCreated: {
      currentMonth: 50,
      lastMonth: 40,
    },
    userRole: {
      total: 100,
      currentMonth: 20,
      lastMonth: 15,
    },
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="track activity, trend and popular destination in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            headerTitle={"Total Users"}
            total={dashoboardStats.totalUsers}
            currentMonthCount={dashoboardStats.usersJoined.currentMonth}
            lastMonthCount={dashoboardStats.usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle={"Total Trips"}
            total={dashoboardStats.totalTrips}
            currentMonthCount={dashoboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashoboardStats.tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle={"User Role"}
            total={dashoboardStats.userRole.total}
            currentMonthCount={dashoboardStats.userRole.currentMonth}
            lastMonthCount={dashoboardStats.userRole.lastMonth}
          />
        </div>
      </section>
    </main>
  );
};

export default dashboard;
