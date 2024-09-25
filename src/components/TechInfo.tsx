// // components/TechInfo.tsx

// import React from "react";
// import { anvPax, anvSar, plasmaTex } from "../constants";
// import TechCard from "./TechCard";

// const TechInfo: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#000721] via-[#1F316F] to-[#000721] py-20 p-8 shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Nossas Capacidades</h2>
//       <div className="flex flex-wrap justify-center items-center">
//         {anvPax.map((anvPax, index) => (
//           <TechCard key={index} icon={anvPax.icon} label={anvPax.label} index={index} />
//         ))}
//       </div>
//       <div className="flex flex-wrap justify-center items-center">
//         {anvSar.map((anvSar, index) => (
//           <TechCard key={index} icon={anvSar.icon} label={anvSar.label} index={index} />
//         ))}
//       </div>
//       <div className="flex flex-wrap justify-center items-center">
//         {plasmaTex.map((plasmaTex, index) => (
//           <TechCard key={index} icon={plasmaTex.icon} label={plasmaTex.label} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechInfo;
