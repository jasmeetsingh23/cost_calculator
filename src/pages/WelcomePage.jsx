import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  w-full ">
      {/* Logo Section */}
      <div className="mb-12">
        <img
          src="https://designbullz.com/wp-content/uploads/2024/10/DBZ-PNG-1024x645.png" // Replace with your logo path
          alt="Company Logo"
          className="h-32 w-auto"
        />
      </div>

      {/* Cost Calculation Line */}
      <div className="text-2xl text-center text-black font-semibold mb-8">
        <p>Your Total Event Cost Calculation</p>
        <hr className="border-t-2 border-gray-200 my-4 w-3/4 mx-auto" />
      </div>

      {/* Start Button to go to Labour Page */}
      <div className="mt-8">
        <Link
          to="/labour" // This will navigate to the Labour page
          className="bg-blue-500 text-black px-8 py-4 rounded-full hover:bg-blue-600"
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
