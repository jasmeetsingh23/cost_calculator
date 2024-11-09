// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation

// function Flooring() {
//   // Define available flooring types for the dropdown
//   const flooringTypes = [
//     "Normal Carpet",
//     "PVC Flooring",
//     "Wooden Flooring",
//     "Grass-Artificial",
//   ];

//   // Initialize state with the first row having a fixed type "4th Raised Platform"
//   const [formData, setFormData] = useState([
//     { type: "4th Raised Platform", sizeOrDays: "", value: 1 }, // First row fixed
//     { type: "Normal Carpet", sizeOrDays: "", value: 1 }, // Second row, default flooring type
//   ]);

//   const handleChange = (index, field, value) => {
//     const newFormData = [...formData];
//     newFormData[index][field] = value;
//     setFormData(newFormData);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       {/* Updated title with larger font size, custom color, and margin */}
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Flooring</h1>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200">
//           <thead>
//             <tr>
//               {/* Adjusted table headers with larger font size and spacing */}
//               <th className="p-6 border-b text-lg text-gray-800">Flooring Type</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
//               <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Updated heading to "Value" */}
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((row, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 {/* Adjusted table data with padding and font size */}
//                 <td className="p-6 border-b text-lg">
//                   {/* If index is 0, display a fixed text; otherwise, display the dropdown */}
//                   {index === 0 ? (
//                     "4th Raised Platform" // First row is fixed text
//                   ) : (
//                     <select
//                       value={row.type}
//                       onChange={(e) => handleChange(index, "type", e.target.value)}
//                       className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                     >
//                       <option value="">Select Floor Type</option>
//                       {flooringTypes.map((flooring, idx) => (
//                         <option key={idx} value={flooring}>
//                           {flooring}
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 </td>
//                 <td className="p-6 border-b text-center text-lg text-gray-700">
//                   {index === 0 ? "Stall Size" : "Floor Type"}
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.sizeOrDays}
//                     onChange={(e) => handleChange(index, "sizeOrDays", e.target.value)}
//                     placeholder="Enter Size/Days"
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                   />
//                 </td>
//                 <td className="p-6 border-b">
//                   {/* Set value to always 1, no editable input field */}
//                   <input
//                     type="number"
//                     value={1} // Set the value to always 1
//                     disabled // Disable the input to prevent editing
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg bg-gray-200"
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
//           to="/lighting" // Navigate back to the Lighting and Electrician page
//           className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
//         >
//           Back: Lighting & Electrician
//         </Link>
//         <Link
//           to="/furniture" // Navigate to the Furniture page
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Next: Furniture
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Flooring;


import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Flooring() {
  // Define available flooring types for the dropdown
  const flooringTypes = [
    "Normal Carpet",
    "PVC Flooring",
    "Wooden Flooring",
    "Grass-Artificial",
  ];

  // Initialize state with the first row having a fixed type "4th Raised Platform"
  const [formData, setFormData] = useState([
    { type: "4th Raised Platform", sizeOrDays: "", value: "" }, // First row fixed
    { type: "", sizeOrDays: "", value: "" }, // Second row with dropdown
  ]);

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      {/* Updated title with larger font size, custom color, and margin */}
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Flooring</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              {/* Adjusted table headers with larger font size and spacing */}
              <th className="p-6 border-b text-lg text-gray-800">Flooring Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Updated heading to "Value" */}
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {/* Adjusted table data with padding and font size */}
                <td className="p-6 border-b text-lg">
                  {/* Conditionally render the dropdown or fixed text */}
                  {index === 0 ? (
                    // First row has a fixed value for "4th Raised Platform"
                    "4th Raised Platform"
                  ) : (
                    // Second row has a dropdown for selecting flooring type
                    <select
                      value={row.type}
                      onChange={(e) => handleChange(index, "type", e.target.value)}
                      className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                    >
                      <option value="">Select Floor Type</option>
                      {flooringTypes.map((flooring, idx) => (
                        <option key={idx} value={flooring}>
                          {flooring}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td className="p-6 border-b text-center text-lg text-gray-700">
                  {index === 0 ? "Stall Size" : "Floor Type"}
                </td>
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
                    onChange={(e) => handleChange(index, "value", e.target.value)} // Changed field to "value"
                    placeholder="Enter Value" // Updated placeholder to "Enter Value"
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
          to="/lighting" // Navigate back to the Lighting and Electrician page
          className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
        >
          Back: Lighting & Electrician
        </Link>
        <Link
          to="/furniture" // Navigate to the Furniture page
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Furniture
        </Link>
      </div>
    </div>
  );
}

export default Flooring;
