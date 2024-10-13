// "use client";

// import React, { useState } from "react";
// import Contact from "./Contact";
// import { FaHome, FaUser, FaList } from "react-icons/fa";
// import Education from "./Education";
// import Experiences from "./Experiences";
// import Profil from "./Profil";
// import SoftSkills from "./SoftSkills";
// import Interests from "./Interests";
// import { PiCodeThin, PiStudentLight } from "react-icons/pi";
// import Skills from "./Skills";

// const NavbarWithModals: React.FC = () => {
//   const [modalContent, setModalContent] = useState<React.ReactNode | null>(
//     null
//   );

//   // Fonction pour ouvrir le modal avec un contenu spécifique
//   const openModal = (content: React.ReactNode) => {
//     setModalContent(content);
//   };

//   // Fonction pour fermer le modal
//   const closeModal = () => {
//     setModalContent(null);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-gray-800 p-4">
//         <ul className="flex justify-between px-20">
//           <li>
//             <button
//               onClick={() => openModal(<Profil />)}
//               className="text-white flex items-center"
//             >
//               <FaUser className="mr-2" />
//               Profil
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => openModal(<Contact />)}
//               className="text-white flex items-center"
//             >
//               <FaUser className="mr-2" />
//               Contact
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => openModal(<SoftSkills />)}
//               className="text-white flex items-center"
//             >
//               <FaList className="mr-2" />
//               Savoir-Etre
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => openModal(<Interests />)}
//               className="text-white flex items-center"
//             >
//               <FaList className="mr-2" />
//               Centres d&apos;intérêts
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => openModal(<Education />)}
//               className="text-white flex items-center"
//             >
//               <PiStudentLight className="mr-2" />
//               Formation
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => openModal(<Experiences />)}
//               className="text-white flex items-center"
//             >
//               <FaHome className="mr-2" />
//               Expérience
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => openModal(<Skills />)}
//               className="text-white flex items-center"
//             >
//               <PiCodeThin className="mr-2" />
//               Compétences technos
//             </button>
//           </li>
//         </ul>
//       </nav>

//       {/* Modal */}
//       {modalContent && (
//         <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-[#F7AB0A] p-6 rounded-lg shadow-lg relative max-w-lg w-full ">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 text-2xl"
//             >
//               &times;
//             </button>
//             {modalContent}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavbarWithModals;
