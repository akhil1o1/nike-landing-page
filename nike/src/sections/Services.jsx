import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
// flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16
const Services = () => {
   return (
      <section
         id="services"
         className="max-container flex justify-center flex-wrap gap-9"
      >
         {services.map((service) => (
            <ServiceCard
               key={service.label}
               imgURL={service.imgURL}
               label={service.label}
               subtext={service.subtext}
            />
         ))}
      </section>
   );
};
export default Services;
