const ShoeCard = ({ shoe, bigShoeImg, changeBigShoeImage }) => {
   return (
      <div
         className={`border-2 rounded-xl ${
            bigShoeImg === shoe ? "border-coral-red" : "border-transparent"
         }  cursor-pointer max-sm:flex-1`}
         onClick={() => changeBigShoeImage(shoe)}
      >
         <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img
               className="object-contain"
               src={shoe}
               alt="shoe"
               width={127}
               height={103}
            />
         </div>
      </div>
   );
};

export default ShoeCard;
