import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function LightingAndElectrician() {
  // Define fixed items for lighting and electrician requirements
  const items = [
    "Conceal - CFL",
    "Conceal - LED",
    "Spot - CFL/Metal",
    "Metal Light",
    "Tube Light",
    "Power Point",
    "LCD/Plasma - 42\" or 32\"",
    "LCD/Plasma - 50\"",
  ];

  // Initialize state for each row's size or days and value fields
  const [formData, setFormData] = useState(
    items.map((item) => ({ item, sizeOrDays: "", value: "" })) // Change rateValue to value
  );

  const handleChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-roboto">
      {/* Updated title with larger font size, custom color, and margin */}
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Lighting and Electrician</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              {/* Adjusted table headers with larger font size and spacing */}
              <th className="p-6 border-b text-lg text-gray-800">Item</th>
              <th className="p-6 border-b text-lg text-gray-800">Value Type</th>
              <th className="p-6 border-b text-lg text-gray-800">Size (m) / Days</th>
              <th className="p-6 border-b text-lg text-gray-800">Value</th> {/* Updated heading to "Value" */}
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
          to="/labour" // Navigate back to Labour and Supervisor Charges page
          className="bg-gray-500 text-white px-6 py-3 text-xl rounded hover:bg-gray-600 mr-4"
        >
          Back: Labour & Supervisor Charges
        </Link>
        <Link
          to="/flooring" // Navigate to the Flooring page
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded hover:bg-blue-600"
        >
          Next: Flooring
        </Link>
      </div>
    </div>
  );
}

export default LightingAndElectrician;
