// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function MaterialCost() {
//   // Define the fixed materials
//   const materials = [
//     "Wood",
//     "Glass",
//     "Branding",
//   ];

//   // Initialize state for each row's material and input fields
//   const [formData, setFormData] = useState(
//     materials.map((material) => ({ material, sizeOrDays: "", value: 1 })) // Set value to always 1
//   );

//   const handleChange = (index, field, value) => {
//     const newFormData = [...formData];
//     newFormData[index][field] = value;
//     setFormData(newFormData);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       {/* Updated title with larger font size, custom color, and margin */}
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Material Cost</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200">
//           <thead>
//             <tr>
//               {/* Adjusted table headers with larger font size and spacing */}
//               <th className="p-6 border-b text-lg text-gray-800">Material</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
//               <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Changed "Rate Value" to "Value" */}
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((row, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 {/* Adjusted table data with padding and font size */}
//                 <td className="p-6 border-b text-lg">{row.material}</td>
//                 <td className="p-6 border-b text-center text-lg text-gray-700">Stall Size</td>
//                 <td className="p-6 border-b">
//                   {/* Allow user to enter size or days */}
//                   <input
//                     type="number"
//                     value={row.sizeOrDays} // Editable input
//                     onChange={(e) => handleChange(index, "sizeOrDays", e.target.value)}
//                     placeholder="Enter Size/Days"
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                   />
//                 </td>
//                 <td className="p-6 border-b">
//                   {/* Value field is always fixed at 1, and readOnly */}
//                   <input
//                     type="number"
//                     value={row.value} // Always fixed at 1
//                     readOnly // Disable input to prevent updates
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Updated button section with padding, font size, and margin */}
//       <div className="flex justify-center mt-12">
//         <Link
//           to="/transportation" // Navigate back to the Transportation page
//           className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
//         >
//           Back: Transportation
//         </Link>

//         <Link
//           to="/final" // Navigate to the Final Cost page
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Next: Final Cost
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default MaterialCost;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function MaterialCost() {
  // Define the fixed materials
  const materials = [
    "Wood",
    "Glass",
    "Branding",
  ];

  // Initialize state for each row's material and input fields
  const [formData, setFormData] = useState(
    materials.map((material) => ({ material, sizeOrDays: "", value: "" }))
  );

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      {/* Updated title with larger font size, custom color, and margin */}
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Material Cost</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              {/* Adjusted table headers with larger font size and spacing */}
              <th className="p-6 border-b text-lg text-gray-800">Material</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Changed "Rate Value" to "Value" */}
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {/* Adjusted table data with padding and font size */}
                <td className="p-6 border-b text-lg">{row.material}</td>
                <td className="p-6 border-b text-center text-lg text-gray-700">Stall Size</td>
                <td className="p-6 border-b">
                  <input
                    type="number"
                    value={row.sizeOrDays}
                    onChange={(e) => handleChange(index, "sizeOrDays", e.target.value)}
                    placeholder="Enter Size/Days"
                    className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                  />
                </td>
                <td className="p-6 border-b">
                  <input
                    type="number"
                    value={row.value} // Changed from rateValue to value
                    onChange={(e) => handleChange(index, "value", e.target.value)}
                    placeholder="Enter Value" // Changed placeholder
                    className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Updated button section with padding, font size, and margin */}
      <div className="flex justify-center mt-12">
        <Link
          to="/transportation" // Navigate back to the Transportation page
          className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
        >
          Back: Transportation
        </Link>

        <Link
          to="/final" // Navigate to the Final Cost page
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Final Cost
        </Link>
      </div>
    </div>
  );
}

export default MaterialCost;
