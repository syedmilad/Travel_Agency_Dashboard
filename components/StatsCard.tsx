import { calculateTrendPercentage, cn } from "lib/utils";

const StatsCard = ({
  headerTitle,
  total,
  currentMonthCount,
  lastMonthCount,
}: StatsCard) => {
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount
  );
  const isDecrement = trend === "decrement";
  return (
    <article className="stats-card">
      <h3 className="text-base font-medium">{headerTitle}</h3>
      <div className="content">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl ">{total}</h2>
          <div className="flex items-center gap-2">
            <figure className="flex items-center gap-2">
            <img src={`/assets/icons/${isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"}`} alt="arrow" />
            </figure>
            <figcaption className={cn("text-base font-medium", isDecrement ? "text-red-500" : "text-success-700")}>{Math.round(percentage)}%</figcaption>
            <p className="text-sm text-gray-100 font-medium truncate">vs last month</p>
          </div>
        </div>
        <img src={`/assets/icons/${isDecrement ? "decrement.svg" : "increment.svg"}`} className="xl:w-32 w-full h-full md:h-32 xl:h-full" alt="trend-graph" />
      </div>
    </article>
  );
};

export default StatsCard;
