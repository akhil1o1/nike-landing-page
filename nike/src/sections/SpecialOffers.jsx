import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
   return (
      <section
         id="about-us"
         className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full"
      >
         <div className="flex-1">
            <img
               src={offer}
               alt="special offers"
               width={773}
               height={687}
               className="object-contain"
            />
         </div>
         <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
               <span className=" text-coral-red">Special</span> Offer
            </h2>
            <p className="mt-4 info-text">
               Embark on a shopping journey that redefines your experience with
               unbeatable deals. From premier selections to incredible savings,
               we offer unparalleled value that sets us apart.
            </p>
            <p className="mt-4 info-text">
               Navigate a realm of possibilities designed to fulfill your unique
               desires, surpassing the loftiest expectations. Your journey with
               us is nothing short of exceptional.
            </p>
            <div className="mt-11 flex gap-4 flex-wrap">
               <Button
                  label={"View Details"}
                  contained={true}
                  iconUrl={arrowRight}
               />
               <Button label={"Learn more"} />
            </div>
         </div>
      </section>
   );
};
export default SpecialOffers;
