// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LabourAndSupervisorCharges from "./pages/LabourAndSupervisorCharges";
// import LightingAndElectrician from "./pages/LightingAndElectrician";
// import Flooring from "./pages/Flooring"; // Import the Flooring component
// import Furniture from "./pages/Furniture";
// import Transportation from "./pages/Transportation";
// import MaterialCost from "./pages/MaterialCost";
// import FinalCost from "./pages/FinalCost";
// import WelcomePage from "./pages/WelcomePage";

// function App() {
//   return (
//     <Router>
//       <div className="p-4 max-w-4xl mx-auto">
//         <Routes>
//           <Route path="/" element={<WelcomePage />} />
//           <Route path="/labour" element={<LabourAndSupervisorCharges />} />
//           <Route path="/lighting" element={<LightingAndElectrician />} />
//           <Route path="/flooring" element={<Flooring />} />
//           <Route path="/furniture" element={<Furniture />} />
//           <Route path="/transportation" element={<Transportation />} />
//           <Route path="/material" element={<MaterialCost />} />
//           <Route path="/final" element={<FinalCost />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LabourAndSupervisorCharges from "./pages/LabourAndSupervisorCharges";
import LightingAndElectrician from "./pages/LightingAndElectrician";
import Flooring from "./pages/Flooring"; // Import the Flooring component
import Furniture from "./pages/Furniture";
import Transportation from "./pages/Transportation";
import MaterialCost from "./pages/MaterialCost";
import FinalCost from "./pages/FinalCost";
import WelcomePage from "./pages/WelcomePage";
import { TotalCostProvider } from "./contexts/TotalCostContext";

function App() {
  return (
    <TotalCostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/labour" element={<LabourAndSupervisorCharges />} />
          <Route path="/lighting" element={<LightingAndElectrician />} />
          <Route path="/flooring" element={<Flooring />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/material" element={<MaterialCost />} />
          <Route path="/final" element={<FinalCost />} />
        </Routes>
      </Router>
    </TotalCostProvider>
  );
}

export default App;
