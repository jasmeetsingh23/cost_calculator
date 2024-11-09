


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function LabourAndSupervisorCharges() {
//   const roles = [
//     "Carpenter",
//     "Painter",
//     "Labour - Loading/Unloading",
//     "Electrician",
//     "Supervisor",
//   ];

//   // Define rates for each role
//   const rates = {
//     Carpenter: 1500,
//     Painter: 1000,
//     "Labour - Loading/Unloading": 800,
//     Electrician: 650,
//     Supervisor: 650,
//   };

//   // Initialize state with fixed roles and default values for sizeOrDays and rateValue
//   const [formData, setFormData] = useState(
//     roles.map((role) => ({
//       role,
//       sizeOrDays: role === "Carpenter" ? 1 : "",  // Carpenter has default value of 1 for sizeOrDays
//       rateValue: rates[role], // Use the rate from the rates object
//       totalValue: role === "Carpenter" ? 1500 : "", // Default totalValue for Carpenter is 1500
//     }))
//   );

//   const handleChange = (index, field, value) => {
//     const newFormData = [...formData];

//     // Update sizeOrDays value dynamically
//     newFormData[index][field] = value;

//     // Calculate the total value based on the sizeOrDays and rateValue for each role
//     if (field === "sizeOrDays") {
//       const sizeOrDays = parseFloat(value);
//       const rateValue = newFormData[index].rateValue;
//       newFormData[index].totalValue = sizeOrDays * rateValue;
//     }

//     setFormData(newFormData);
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto font-roboto">
//       <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Labour and Supervisor Charges</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200">
//           <thead>
//             <tr>
//               <th className="p-6 border-b text-lg text-gray-800">Role</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
//               <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
//               <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Updated heading to "Value" */}
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((row, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="p-6 border-b text-lg">{row.role}</td>
//                 <td className="p-6 border-b text-center text-lg text-gray-700">
//                   {row.role === "Electrician" || row.role === "Supervisor" ? "Event Days" : "Stall Size"}
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.sizeOrDays}
//                     onChange={(e) => handleChange(index, "sizeOrDays", e.target.value)}
//                     placeholder={row.role === "Supervisor" ? "Always 3" : "Enter Size/Days"}
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                     readOnly={row.role === "Supervisor"} // Make it read-only for Supervisor
//                   />
//                 </td>
//                 <td className="p-6 border-b">
//                   <input
//                     type="number"
//                     value={row.rateValue}
//                     onChange={(e) => handleChange(index, "rateValue", e.target.value)}
//                     placeholder="Enter Value" // Updated placeholder text
//                     className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
//                     readOnly={row.role !== "Supervisor"} // Make it read-only unless it's Supervisor
//                   />
//                 </td>
//                 {/* Display the total value for each role */}
//                 <td className="p-6 border-b text-lg font-semibold">
//                   {row.totalValue}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Button to navigate to next page */}
//       <div className="flex justify-center mt-12">
//         <Link
//           to="/lighting"
//           className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
//         >
//           Next: Lighting & Electrician
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LabourAndSupervisorCharges;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function LabourAndSupervisorCharges() {
  const roles = [
    "Carpenter",
    "Painter",
    "Labour - Loading/Unloading",
    "Electrician",
    "Supervisor",
  ];

  // Define rates for each role
  const rates = {
    Carpenter: 1500,
    Painter: 1000,
    "Labour - Loading/Unloading": 800,
    Electrician: 650,
    Supervisor: 650, // Supervisor rate is fixed at 650
  };

  // Initialize state with fixed roles and default values for sizeOrDays and rateValue
  const [formData, setFormData] = useState(
    roles.map((role) => ({
      role,
      sizeOrDays: role === "Supervisor" ? 1 : "", // Supervisor sizeOrDays is editable now
      rateValue: rates[role], // Use the rate from the rates object
      totalValue: role === "Supervisor" ? 650 : "", // Total value is calculated for Supervisor
    }))
  );

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];

    // Update sizeOrDays value dynamically for all roles
    newFormData[index][field] = value;

    // Calculate the total value based on the sizeOrDays and rateValue for each role
    if (field === "sizeOrDays") {
      const sizeOrDays = parseFloat(value);
      const rateValue = newFormData[index].rateValue;
      newFormData[index].totalValue = sizeOrDays * rateValue;
    }

    setFormData(newFormData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Labour and Supervisor Charges</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="p-6 border-b text-lg text-gray-800">Role</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Updated heading to "Value" */}
            </tr>
          </thead>
          <tbody>
            {formData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-6 border-b text-lg">{row.role}</td>
                <td className="p-6 border-b text-center text-lg text-gray-700">
                  {row.role === "Electrician" || row.role === "Supervisor" ? "Event Days" : "Stall Size"}
                </td>
                <td className="p-6 border-b">
                  <input
                    type="number"
                    value={row.sizeOrDays}
                    onChange={(e) => handleChange(index, "sizeOrDays", e.target.value)}
                    placeholder={row.role === "Supervisor" ? "Enter Size/Days" : "Enter Size/Days"}
                    className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                  />
                </td>
                <td className="p-6 border-b">
                  <input
                    type="number"
                    value={row.rateValue}
                    onChange={(e) => handleChange(index, "rateValue", e.target.value)}
                    placeholder="Enter Value" // Updated placeholder text
                    className="w-full px-4 py-3 border rounded focus:outline-none text-lg"
                    readOnly={row.role !== "Supervisor"} // Make it read-only unless it's Supervisor
                  />
                </td>
                {/* Display the total value for each role */}
                <td className="p-6 border-b text-lg font-semibold">
                  {row.totalValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to navigate to next page */}
      <div className="flex justify-center mt-12">
        <Link
          to="/lighting"
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Lighting & Electrician
        </Link>
      </div>
    </div>
  );
}

export default LabourAndSupervisorCharges;
