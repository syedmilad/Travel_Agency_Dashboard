import Header from "components/Header";
import StatsCard from "components/StatsCard";
import TripCard from "components/TripCard";
import { allTrips, user, userDashboard } from "~/constants";
import type { Route } from "./+types/dashboard";
import { getUser } from "~/appwrite/auth";

export const clientLoader = async () => await getUser();

const dashboard = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData as User | null;
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destination in real time"
      />

      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard
            headerTitle="Total User"
            total={userDashboard.totalUsers}
            currentMonthCount={userDashboard.userJoined.currentMonth}
            lastMonthCount={userDashboard.userJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={userDashboard.totalTrips}
            currentMonthCount={userDashboard.tripCreated.currentMonth}
            lastMonthCount={userDashboard.tripCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Total Users"
            total={userDashboard.userRole.total}
            currentMonthCount={userDashboard.userRole.currentMonth}
            lastMonthCount={userDashboard.userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
        <div className="trip-grid">
          {allTrips
            .slice(0, 4)
            .map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
              <TripCard
                key={id}
                id={id.toString()}
                name={name}
                imageUrl={imageUrls?.[0]}
                location={itinerary?.[0]?.location ?? "Unknown Location"}
                tags={tags}
                price={estimatedPrice}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default dashboard;
