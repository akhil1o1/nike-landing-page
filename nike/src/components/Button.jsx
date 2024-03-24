const Button = ({ label, iconUrl }) => {
   return (
      <button className="flex justify-center text-lg text-white items-center gap-2 px-7 py-4 w-max rounded-full bg-coral-red font-montserrat leading-none">
         {label}
         {iconUrl && (
            <img
               className=" ml-2 rounded-full bg-white w-5 h-5"
               src={iconUrl}
               alt="icon"
            />
         )}
      </button>
   );
};

export default Button;
