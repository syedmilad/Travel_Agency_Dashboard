import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { cn } from "lib/utils";
import { Link, useLocation } from "react-router";

const Header = ({
  title,
  description,
  ctaText,
  ctaUrl
}: {
  title: string;
  description: string;
  ctaText?: string,
  ctaUrl?: string
}) => {

  const location = useLocation()
  return <header className="header">
    <article>
      <h1 className={cn("text-dark-100", location.pathname === '/' ? "text-2xl  md:text-4xl font-bold" : "text-xl md:text-2xl font-semibold")}>{title}</h1>
      <p className={cn("text-gray-100 font-normal", location.pathname === "/" ? "text-base md:text-lg " : "text-sm md:text-lg ")} >{description}</p>
    </article>

    {ctaText && ctaUrl && (
      <Link to={ctaUrl} >
        <ButtonComponent type="button" className="!h-11 button-class w-full md:w-[240px]" >
          <img src="/assets/icons/plus.svg" alt="plus" className="size-6" />
          <span className="p-16-semibold text-white">{ctaText}</span>
        </ButtonComponent>
      </Link>
    )}
  </header>;
};

export default Header;
