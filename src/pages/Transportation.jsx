// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Transportation() {
//   // Define available items for transportation with fixed "Size (m) / Days" values
//   const items = [
//     { item: "For Fabrication Goods-Local", sizeOrDays: 2, rateValue: "" },
//     { item: "For Branding", sizeOrDays: 1, rateValue: "" },
//     { item: "Supervisor", sizeOrDays: 1, rateValue: "" },
//   ];

//   // Initialize state with each item and its respective fields
//   const [formData, setFormData] = useState(items);

//   const handleChange = (index, field, value) => {
//     const newFormData = [...formData];
//     newFormData[index][field] = value;
//     setFormData(newFormData);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       {/* Updated title with larger font size, custom color, and margin */}
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Transportation</h1>
      
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
//                 <td className="p-6 border-b text-center text-lg text-gray-700">No of Trucks</td>
//                 <td className="p-6 border-b">
//                   {/* Make sizeOrDays read-only */}
//                   <input
//                     type="number"
//                     value={row.sizeOrDays}
//                     readOnly
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg bg-gray-200"
//                   />
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.rateValue}
//                     onChange={(e) => handleChange(index, "rateValue", e.target.value)}
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
//           to="/furniture" // Navigate back to the Furniture page
//           className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
//         >
//           Back: Furniture
//         </Link>
//         <Link
//           to="/material" // Navigate to the Material Cost page
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Next: Material Cost
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Transportation;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Transportation() {
  // Define available items for transportation
  const items = [
    "For Fabrication Goods-Local",
    "For Branding",
    "Supervisor",
  ];

  // Initialize state with each item and its respective fields
  const [formData, setFormData] = useState(
    items.map((item) => ({ item, sizeOrDays: "", rateValue: "" }))
  );

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      {/* Updated title with larger font size, custom color, and margin */}
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Transportation</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              {/* Adjusted table headers with larger font size and spacing */}
              <th className="p-6 border-b text-lg text-gray-800">Item</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Changed "Rate Value" to "Value" */}
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {/* Adjusted table data with padding and font size */}
                <td className="p-6 border-b text-lg">{row.item}</td>
                <td className="p-6 border-b text-center text-lg text-gray-700">No of Trucks</td>
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
                    value={row.rateValue}
                    onChange={(e) => handleChange(index, "rateValue", e.target.value)}
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
          to="/furniture" // Navigate back to the Furniture page
          className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
        >
          Back: Furniture
        </Link>
        <Link
          to="/material" // Navigate to the Material Cost page
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Material Cost
        </Link>
      </div>
    </div>
  );
}

export default Transportation;
