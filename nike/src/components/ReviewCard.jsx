import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
   return (
      <div className=" flex flex-col justify-center items-center">
         <img
            src={review.imgURL}
            alt="review"
            className="rounded-full object-cover w-[120px] h-[120px]"
         />
         <p className="mt-6 max-w-sm text-center info-text">
            {review.feedback}
         </p>
         <div className="flex items-center justify-center gap-4 mt-4">
            <img
               src={star}
               width={24}
               height={24}
               alt="rating star"
               className=" object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">
               {review.rating}
            </p>
         </div>
         <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
            {review.customerName}
         </h3>
      </div>
   );
};

export default ReviewCard;
