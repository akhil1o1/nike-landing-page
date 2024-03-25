import { star } from "../assets/icons";

const ProductCard = ({ imageURL, name, price }) => {
   console.log(imageURL, name, price);

   return (
      <div
         className="flex flex-col w-full flex-1 max-sm:w-full"
      >
         <img
            src={imageURL}
            alt={name}
            className="w-[282px] h-[282px]"
         />
         <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating-icon" width={24} height={24} />
            <p className=" font-montserrat text-xl leading-normal ">
               {"(4.5)"}
            </p>
         </div>
         <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {name}
         </h3>
         <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            {price}
         </p>
      </div>
   );
};

export default ProductCard;
