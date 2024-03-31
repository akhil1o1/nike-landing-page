import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";

const Footer = () => {
   return (
      <footer className="max-container">
         <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <div>
               <a>
                  <img
                     src={footerLogo}
                     width={150}
                     height={46}
                     className="m-0"
                  />
               </a>
               <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                  Get shoes ready for the new term at your nearest Nike store.
                  Find Your perfect Size In Store. Get Rewards
               </p>
               <div className="flex items-center gap-4 my-8">
                  {socialMedia.map((media) => (
                     <div
                        key={media.alt}
                        className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                     >
                        <img
                           src={media.src}
                           alt={media.alt}
                           width={24}
                           height={24}
                        />
                     </div>
                  ))}
               </div>
            </div>

            {footerLinks.map((link) => (
               <div key={link.title}>
                  <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                     {link.title}
                  </h4>
                  <ul>
                     {link.links.map((item) => (
                        <li
                           key={item}
                           className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                        >
                           <a href={item.link}>{item.name}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </footer>
   );
};
export default Footer;
