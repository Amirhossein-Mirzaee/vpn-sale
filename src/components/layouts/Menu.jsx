// import { useState } from "react";
// import LOGO from "@/src/assets/PNG/LOGO.png";
// import links from "@/src/assets/datas/navLinks";
// import { HamburgetMenuClose, HamburgetMenuOpen, LeftArrow } from "@/src/assets/icons";
// import { Link as Kinder } from "react-scroll";

// const Menu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="sm:visible sm:block tablet:hidden">
//       <button
//         onClick={() => setOpen(true)}
//         className="w-10  mx-4 text-[#F2D08B] cursor-pointer"
//       >
//         <HamburgetMenuOpen />
//       </button>

//       <div
//         className={`fixed right-0 inset-y-0 w-[250px] transition-all duration-300 bg-[#1C222E] z-50 overflow-y-auto max-h-screen ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col items-center group py-4  ">
//           <img src={LOGO} width="70" className="my-6 cursor-pointer" />
//           <div
//             className="w-11 absolute  left-0 text-[#F2D08B] cursor-pointer"
//             onClick={() => setOpen(false)}
//           >
//             <HamburgetMenuClose />
//           </div>
//           <div className="bg-white h-1 w-full"></div>
//           <div className="  flex flex-col-reverse items-center py-11 justify-center gap-y-5 text-xl font-bold text-black w-full relative px-2 ">
//             {links.map((link) => {
//               return (
//                 <Kinder
//                   key={link.id}
//                   to={link.link}
//                   smooth={true}
//                   offset={-65}
//                   duration={500}
//                   onClick={() => setOpen(!open)}
//                   className="bg-[#F2D08B] rounded-md cursor-pointer w-full py-5 px-3 flex  hover-effect justify-between items-center  flex-row-reverse"
//                 >
//                   <p>{link.name}</p>
//                   <div className="left-4  flex items-center justify-between ">
//                     <LeftArrow />
//                   </div>
//                 </Kinder>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <div
//         onClick={() => setOpen(false)}
//         className={` tablet:invisible z-40 fixed bg-black/30 inset-0 backdrop-blur-sm transition-all duration-300 ${
//           open ? "opacity-100 visible " : "opacity-0 invisible"
//         }`}
//       ></div>
//     </div>
//   );
// };

// export default Menu;
