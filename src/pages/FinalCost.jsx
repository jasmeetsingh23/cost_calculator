// import React from "react";
// import { Link } from "react-router-dom";
// import { useTotalCost } from "../contexts/TotalCostContext"; // Import context hook

// function FinalCost() {
//   const { totalCosts } = useTotalCost(); // Get the total costs from context

//   const {
//     materialCost = 0,
//     transportationCost = 0,
//     furnitureCost = 0,
//     flooringCost = 0,
//     lightingAndElectricianCost = 0, // Ensure lighting cost is correctly mapped
//     labourCost = 0, // Extract labourCost from context
//   } = totalCosts; // Destructure the totalCosts object

//   const totalAmount =
//     materialCost +
//     transportationCost +
//     furnitureCost +
//     flooringCost +
//     lightingAndElectricianCost + // Corrected to use lightingAndElectricianCost
//     labourCost; // Include labourCost in total calculation

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
//         Final Cost
//       </h1>

//       <div className="space-y-6">
//         <div className="flex justify-between text-lg">
//           <span>Material Cost:</span>
//           <span>₹{materialCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg">
//           <span>Transportation Cost:</span>
//           <span>₹{transportationCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg">
//           <span>Furniture Cost:</span>
//           <span>₹{furnitureCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg">
//           <span>Flooring Cost:</span>
//           <span>₹{flooringCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg">
//           <span>Lighting Cost:</span>
//           <span>₹{lightingAndElectricianCost.toFixed(2)}</span>{" "}
//           {/* Updated lighting cost */}
//         </div>
//         <div className="flex justify-between text-lg">
//           <span>Labour Cost:</span>
//           <span>₹{labourCost.toFixed(2)}</span> {/* Display Labour Cost */}
//         </div>

//         <div className="flex justify-between font-bold text-xl">
//           <span>Total Amount:</span>
//           <span>₹{totalAmount.toFixed(2)}</span>
//         </div>
//       </div>

//       <div className="flex justify-center mt-12">
//         <Link
//           to="/"
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Go to Summary
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default FinalCost;

import React from "react";
import { Link } from "react-router-dom";
import { useTotalCost } from "../contexts/TotalCostContext"; // Import context hook
import { jsPDF } from "jspdf"; // Import jsPDF

function FinalCost() {
  const { totalCosts } = useTotalCost(); // Get the total costs from context

  const {
    materialCost = 0,
    transportationCost = 0,
    furnitureCost = 0,
    flooringCost = 0,
    lightingAndElectricianCost = 0, // Ensure lighting cost is correctly mapped
    labourCost = 0, // Extract labourCost from context
  } = totalCosts; // Destructure the totalCosts object

  const totalAmount =
    materialCost +
    transportationCost +
    furnitureCost +
    flooringCost +
    lightingAndElectricianCost + // Corrected to use lightingAndElectricianCost
    labourCost; // Include labourCost in total calculation

  // Function to download the total cost as a PDF
  const downloadTotalCostAsPDF = () => {
    const doc = new jsPDF();

    // Set title and formatting
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Final Cost Summary", 14, 20);

    // Set normal text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Add content with details of the costs
    doc.text(`Material Cost: ₹${materialCost.toFixed(2)}`, 14, 40);
    doc.text(`Transportation Cost: ₹${transportationCost.toFixed(2)}`, 14, 50);
    doc.text(`Furniture Cost: ₹${furnitureCost.toFixed(2)}`, 14, 60);
    doc.text(`Flooring Cost: ₹${flooringCost.toFixed(2)}`, 14, 70);
    doc.text(
      `Lighting Cost: ₹${lightingAndElectricianCost.toFixed(2)}`,
      14,
      80
    );
    doc.text(`Labour Cost: ₹${labourCost.toFixed(2)}`, 14, 90);

    doc.setFont("helvetica", "bold");
    doc.text(`Total Amount: ₹${totalAmount.toFixed(2)}`, 14, 110);

    // Save the document with the name "TotalCost.pdf"
    doc.save("TotalCost.pdf");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        Final Cost
      </h1>

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
          <span>₹{lightingAndElectricianCost.toFixed(2)}</span>{" "}
          {/* Updated lighting cost */}
        </div>
        <div className="flex justify-between text-lg">
          <span>Labour Cost:</span>
          <span>₹{labourCost.toFixed(2)}</span> {/* Display Labour Cost */}
        </div>

        <div className="flex justify-between font-bold text-xl">
          <span>Total Amount:</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Go to Summary
        </Link>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={downloadTotalCostAsPDF}
          className="bg-green-500 text-white px-6 py-3 text-xl rounded hover:bg-green-600"
        >
          Download Total Cost as PDF
        </button>
      </div>
    </div>
  );
}

export default FinalCost;
