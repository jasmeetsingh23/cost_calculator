// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function LightingAndElectrician() {
//   // Define items with fixed or editable sizeOrDays values and rates
//   const items = [
//     { name: "Conceal - CFL", rate: 125, sizeOrDays: 1, editable: false },
//     { name: "Conceal - LED", rate: 200, sizeOrDays: 1, editable: false },
//     { name: "Spot - CFL/Metal", rate: 75, sizeOrDays: 1, editable: false },
//     { name: "Metal Light", rate: 800, sizeOrDays: 1, editable: false },
//     { name: "Tube Light", rate: 125, sizeOrDays: 1, editable: false },
//     { name: "Power Point", rate: 100, sizeOrDays: 1, editable: false },
//     {
//       name: 'LCD/Plasma - 42" or 32"',
//       rate: 1200,
//       sizeOrDays: "",
//       editable: true,
//     },
//     { name: 'LCD/Plasma - 50"', rate: 4000, sizeOrDays: 1, editable: false },
//   ];

//   // Initialize state for each row's value and total cost fields, set totalCost to 0 initially
//   const [formData, setFormData] = useState(
//     items.map((item) => ({
//       item: item.name,
//       rate: item.rate,
//       sizeOrDays: item.sizeOrDays, // Set fixed size or days based on item definition
//       editable: item.editable,
//       value: 0, // Start with value 0
//       totalCost: 0, // Start with totalCost 0
//     }))
//   );

//   const handleChange = (index, field, value) => {
//     const newFormData = [...formData];
//     newFormData[index][field] = value;

//     // Calculate the total cost based on sizeOrDays, value, and rate
//     const sizeOrDays = parseFloat(newFormData[index].sizeOrDays) || 1;
//     const rate = newFormData[index].rate;
//     const valueField = parseFloat(newFormData[index].value) || 0; // Start with 0 if empty
//     newFormData[index].totalCost = sizeOrDays * valueField * rate;

//     setFormData(newFormData);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
//         Lighting and Electrician
//       </h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200">
//           <thead>
//             <tr>
//               <th className="p-6 border-b text-lg text-gray-800">Item</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
//               <th className="p-6 border-b text-lg text-gray-800">
//                 Size (m) / Days
//               </th>
//               <th className="p-6 border-b text-lg text-gray-800">Value</th>
//               <th className="p-6 border-b text-lg text-gray-800">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((row, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="p-6 border-b text-lg">{row.item}</td>
//                 <td className="p-6 border-b text-center text-lg text-gray-700">
//                   Quantity
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.sizeOrDays}
//                     onChange={(e) =>
//                       handleChange(index, "sizeOrDays", e.target.value)
//                     }
//                     placeholder="Enter Size/Days"
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                     readOnly={!row.editable} // Make read-only if not editable
//                   />
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.value}
//                     onChange={(e) =>
//                       handleChange(index, "value", e.target.value)
//                     }
//                     placeholder="Enter Value"
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                   />
//                 </td>
//                 <td className="p-6 border-b text-lg font-semibold">
//                   {row.totalCost} {/* Initially will be 0 */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-12">
//         <Link
//           to="/labour"
//           className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
//         >
//           Back: Labour & Supervisor Charges
//         </Link>
//         <Link
//           to="/flooring"
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Next: Flooring
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LightingAndElectrician;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTotalCost } from "../contexts/TotalCostContext"; // Import context hook

function LightingAndElectrician() {
  const items = [
    { name: "Conceal - CFL", rate: 125, sizeOrDays: 1, editable: false },
    { name: "Conceal - LED", rate: 200, sizeOrDays: 1, editable: false },
    { name: "Spot - CFL/Metal", rate: 75, sizeOrDays: 1, editable: false },
    { name: "Metal Light", rate: 800, sizeOrDays: 1, editable: false },
    { name: "Tube Light", rate: 125, sizeOrDays: 1, editable: false },
    { name: "Power Point", rate: 100, sizeOrDays: 1, editable: false },
    {
      name: 'LCD/Plasma - 42" or 32"',
      rate: 1200,
      sizeOrDays: "",
      editable: true,
    },
    { name: 'LCD/Plasma - 50"', rate: 4000, sizeOrDays: 1, editable: false },
  ];

  const { updateTotal } = useTotalCost(); // Use context to update the total

  const [formData, setFormData] = useState(
    items.map((item) => ({
      item: item.name,
      rate: item.rate,
      sizeOrDays: item.sizeOrDays,
      editable: item.editable,
      value: 0,
      totalCost: 0,
    }))
  );

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;

    const sizeOrDays = parseFloat(newFormData[index].sizeOrDays) || 1;
    const rate = newFormData[index].rate;
    const valueField = parseFloat(newFormData[index].value) || 0;

    newFormData[index].totalCost = sizeOrDays * valueField * rate;

    setFormData(newFormData);
  };

  useEffect(() => {
    // Calculate the total cost for lighting and electrician
    const lightingAndElectricianTotal = formData.reduce(
      (sum, item) => sum + item.totalCost,
      0
    );

    // Update the total cost in context
    updateTotal("lightingAndElectricianCost", lightingAndElectricianTotal);
  }, [formData, updateTotal]);

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        Lighting and Electrician
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="p-6 border-b text-lg text-gray-800">Item</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">
                Size (m) / Days
              </th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th>
              <th className="p-6 border-b text-lg text-gray-800">Total</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-6 border-b text-lg">{row.item}</td>
                <td className="p-6 border-b text-center text-lg text-gray-700">
                  Quantity
                </td>
                <td className="p-6 border-b">
                  <input
                    type="number"
                    value={row.sizeOrDays}
                    onChange={(e) =>
                      handleChange(index, "sizeOrDays", e.target.value)
                    }
                    placeholder="Enter Size/Days"
                    className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                    readOnly={!row.editable}
                  />
                </td>
                <td className="p-6 border-b">
                  <input
                    type="number"
                    value={row.value}
                    onChange={(e) =>
                      handleChange(index, "value", e.target.value)
                    }
                    placeholder="Enter Value"
                    className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                  />
                </td>
                <td className="p-6 border-b text-lg font-semibold">
                  {row.totalCost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/labour"
          className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
        >
          Back: Labour & Supervisor Charges
        </Link>
        <Link
          to="/flooring"
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Flooring
        </Link>
      </div>
    </div>
  );
}

export default LightingAndElectrician;
