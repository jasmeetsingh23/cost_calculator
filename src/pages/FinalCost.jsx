// import React from "react";
// import { useLocation, Link} from "react-router-dom";

// function FinalCost() {
//   const location = useLocation();

//   // Extract the costs passed from each page
//   const {
//     materialCost = 0,
//     transportationCost = 0,
//     furnitureCost = 0,
//     flooringCost = 0,
//     lightingCost = 0,
//   } = location.state || {}; // Default to 0 if not provided

//   // Calculate the total amount
//   const totalAmount = materialCost + transportationCost + furnitureCost + flooringCost + lightingCost;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-semibold mb-6 text-center">Final Cost</h1>

//       {/* Display individual costs */}
//       <div className="space-y-4">
//         <div className="flex justify-between">
//           <span>Material Cost:</span>
//           <span>₹{materialCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Transportation Cost:</span>
//           <span>₹{transportationCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Furniture Cost:</span>
//           <span>₹{furnitureCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Flooring Cost:</span>
//           <span>₹{flooringCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Lighting Cost:</span>
//           <span>₹{lightingCost.toFixed(2)}</span>
//         </div>

//         {/* Display the total amount */}
//         <div className="flex justify-between font-bold text-lg">
//           <span>Total Amount:</span>
//           <span>₹{totalAmount.toFixed(2)}</span> {/* Format with ₹ symbol */}
//         </div>
//       </div>

//       {/* Next button (you can link it to any other page you want to go to) */}
//       <div className="flex justify-center mt-6">
//         <Link
//           to="/"
//           className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
//         >
//           Go to Summary
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default FinalCost;



import React from "react";
import { useLocation, Link } from "react-router-dom";

function FinalCost() {
  const location = useLocation();

  // Extract the costs passed from each page
  const {
    materialCost = 0,
    transportationCost = 0,
    furnitureCost = 0,
    flooringCost = 0,
    lightingCost = 0,
  } = location.state || {}; // Default to 0 if not provided

  // Calculate the total amount
  const totalAmount = materialCost + transportationCost + furnitureCost + flooringCost + lightingCost;

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      {/* Title with larger font size and custom color */}
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Final Cost</h1>

      {/* Display individual costs */}
      <div className="space-y-6">
        <div className="flex justify-between text-lg">
          <span>Material Cost:</span>
          <span>₹{materialCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Transportation Cost:</span>
          <span>₹{transportationCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Furniture Cost:</span>
          <span>₹{furnitureCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Flooring Cost:</span>
          <span>₹{flooringCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Lighting Cost:</span>
          <span>₹{lightingCost.toFixed(2)}</span>
        </div>

        {/* Display the total amount with bold and larger font */}
        <div className="flex justify-between font-bold text-xl">
          <span>Total Amount:</span>
          <span>₹{totalAmount.toFixed(2)}</span> {/* Format with ₹ symbol */}
        </div>
      </div>

      {/* Navigation button to summary */}
      <div className="flex justify-center mt-12">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Go to Summary
        </Link>
      </div>
    </div>
  );
}

export default FinalCost;
