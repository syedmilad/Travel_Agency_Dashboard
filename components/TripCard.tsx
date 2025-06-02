import { StockChartStripLineSettings,ChipListComponent,ChipsDirective } from "@syncfusion/ej2-react-charts";
import { Link, useLocation } from "react-router";

const TripCard = ({
  id,
  name,
  location,
  imageUrl,
  tags,
  price,
}: TripCardProps) => {
  const path = useLocation();
  return (
    <Link
      to={
        path.pathname === "/" || path.pathname.startsWith("/travel")
          ? `/travel/${id}`
          : `/trips/${id}`
      }
      className="trip-card"
    >
      <img src={imageUrl} alt={name} />
      <article>
        <h2>{name}</h2>
        <figure>
          <img
            src="/assets/icons/location-mark.svg"
            alt={name}
            className="size-4"
          />
          <figcaption>{location}</figcaption>
        </figure>
      </article>

      <div className="mt-5 pl-[18px] pr-3.5 pb-6">
        <ChipListComponent>

          <ChipsDirective>
            {tags.map(( ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>

    </Link>
  );
};

export default TripCard;
