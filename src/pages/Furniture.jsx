// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Furniture() {
//   // Define fixed items for furniture
//   const items = [
//     "Revolving Chair",
//     "Fix Chair",
//     "Bar Stool",
//     "Glass Table",
//     "Sofa Seats",
//     "Brochure Stand",
//   ];

//   // Initialize state for each row's size or days (always 1) and value field
//   const [formData, setFormData] = useState(
//     items.map((item) => ({ item, sizeOrDays: 1, value: "" })) // Always set sizeOrDays to 1
//   );

//   const handleChange = (index, field, value) => {
//     const newFormData = [...formData];
//     newFormData[index][field] = value;
//     setFormData(newFormData);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       {/* Updated title with larger font size, custom color, and margin */}
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Furniture</h1>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200">
//           <thead>
//             <tr>
//               {/* Adjusted table headers with larger font size and spacing */}
//               <th className="p-6 border-b text-lg text-gray-800">Item</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
//               <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((row, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 {/* Adjusted table data with padding and font size */}
//                 <td className="p-6 border-b text-lg">{row.item}</td>
//                 <td className="p-6 border-b text-center text-lg text-gray-700">Quantity</td>
//                 <td className="p-6 border-b">
//                   {/* Display sizeOrDays as 1 (non-editable) */}
//                   <input
//                     type="number"
//                     value={row.sizeOrDays}
//                     readOnly // Making it non-editable
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                   />
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.value}
//                     onChange={(e) => handleChange(index, "value", e.target.value)}
//                     placeholder="Enter Value"
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
//           to="/flooring" // Navigate back to the Flooring page
//           className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
//         >
//           Back: Flooring
//         </Link>
//         <Link
//           to="/transportation" // Navigate to the Transportation page
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Next: Transportation
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Furniture;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Furniture() {
  // Define fixed items for furniture
  const items = [
    "Revolving Chair",
    "Fix Chair",
    "Bar Stool",
    "Glass Table",
    "Sofa Seats",
    "Brochure Stand",
  ];

  // Initialize state for each row's size or days and rate value fields
  const [formData, setFormData] = useState(
    items.map((item) => ({ item, sizeOrDays: "", value: "" })) // Changed rateValue to value
  );

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      {/* Updated title with larger font size, custom color, and margin */}
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Furniture</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              {/* Adjusted table headers with larger font size and spacing */}
              <th className="p-6 border-b text-lg text-gray-800">Item</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Changed from Rate Value to Value */}
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {/* Adjusted table data with padding and font size */}
                <td className="p-6 border-b text-lg">{row.item}</td>
                <td className="p-6 border-b text-center text-lg text-gray-700">Quantity</td>
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
                    value={row.value} // Changed rateValue to value
                    onChange={(e) => handleChange(index, "value", e.target.value)} // Changed rateValue to value
                    placeholder="Enter Value" // Changed placeholder text
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
          to="/flooring" // Navigate back to the Flooring page
          className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
        >
          Back: Flooring
        </Link>
        <Link
          to="/transportation" // Navigate to the Transportation page
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Transportation
        </Link>
      </div>
    </div>
  );
}

export default Furniture;
