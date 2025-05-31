import Header from "components/Header";
import StatsCard from "components/StatsCard";
import TripCard from "components/TripCard";

const dashboard = () => {
  const userDashboard = {
    totalUsers: 12450,
    userJoined: {
      currentMonth: 150,
      lastMonth: 120,
    },
    totalTrips: 3500,
    tripCreated: {
      currentMonth: 60,
      lastMonth: 75,
    },
    userRole: {
      total: 60,
      currentMonth: 25,
      lastMonth: 20,
    },
  };
  const user = { name: "John Doe" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destination in real time"
      />

      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard headerTitle="Total User" total={userDashboard.totalUsers} currentMonthCount={userDashboard.userJoined.currentMonth} lastMonthCount={userDashboard.userJoined.lastMonth}  />
          <StatsCard headerTitle="Total Trips" total={userDashboard.totalTrips} currentMonthCount={userDashboard.tripCreated.currentMonth} lastMonthCount={userDashboard.tripCreated.lastMonth}  />
          <StatsCard headerTitle="Total Users" total={userDashboard.userRole.total} currentMonthCount={userDashboard.userRole.currentMonth} lastMonthCount={userDashboard.userRole.lastMonth}  />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default dashboard;
