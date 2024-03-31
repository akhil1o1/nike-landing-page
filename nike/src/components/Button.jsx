const Button = ({ label, iconUrl, contained }) => {
   return (
      <button
         className={`flex justify-center text-lg  items-center gap-2 px-7 py-4 w-max rounded-full  font-montserrat leading-none ${
            contained
               ? "text-white bg-coral-red"
               : "text-slate-gray border border-slate-gray bg-white"
         }`}
      >
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
