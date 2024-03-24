import { useState } from "react";

import { statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
   const [bigShoe, setBigShoe] = useState(bigShoe1);


   return (
      <section
         id="home"
         className="w-full flex flex-col xl:flex-row justify-center gap-10 min-h-screen max-container"
      >
         <div className=" relative xl:w-2/5 flex flex-col justify-center item-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-coral-red">
               Our Summer collections
            </p>
            <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
               <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                  The New Arrival
               </span>
               <br />
               <span className=" text-coral-red inline-block mt-3">
                  Nike
               </span>{" "}
               Shoes
            </h1>
            <p className=" font-montserrat text-slate-gray text-lg mb-14 mt-6 sm:max-w-sm leading-8">
               Discover stylish Nike arrivals, quality comfort, and innovation
               for your active life.
            </p>
            <Button label={"Shop Now"} iconUrl={arrowRight} />
            <div className=" flex gap-5 mt-20">
               {statistics.map((stat) => (
                  <div key={stat.label}>
                     <p className=" text-4xl font-bold font-palanquin">
                        {stat.value}
                     </p>
                     <p className="leading-7 font-montserrat text-slate-gray">
                        {stat.label}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         <div className=" relative flex-1 bg-primary flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-center bg-cover">
            <img
               src={bigShoe}
               alt="shoe collection"
               width={610}
               height={500}
               className="object-contain relative z-10"
            />
            <div className="flex absolute gap-4 sm:gap-5 -bottom-[5%] sm:left-[10%] max-sm:px-6">
               {[bigShoe1, bigShoe2, bigShoe3].map((shoe, index) => (
                  <div key={index}>
                     <ShoeCard
                        shoe={shoe}
                        changeBigShoeImage={(shoe) => setBigShoe(shoe)}
                        bigShoeImg={bigShoe}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
export default Hero;
