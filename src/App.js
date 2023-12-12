import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeaponList from "./components/WeaponList";
import EquipmentList from "./components/EquipmentList";
import Ammo from "./components/Ammo";
import Personnel from "./components/Personnel";
import SpecialPersonnel from "./components/SpecialPersonnel";
import TechnicalEquipments from "./components/TechnicalEquipments";
import UAV from "./components/UAV";
import Vehicle from "./components/Vehicle";
import { Card } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Card
        sx={{
          marginBottom: "20px",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <WeaponList />
        <EquipmentList />
      </Card>

      <Card
        sx={{
          marginBottom: "20px",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <TechnicalEquipments />
        <SpecialPersonnel />
      </Card>

      <Card
        sx={{
          marginBottom: "20px",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <Vehicle />
        <Ammo />
      </Card>

      <Card
        sx={{
          marginBottom: "20px",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <UAV />
        <Personnel />
      </Card>
      <Footer />
    </div>
  );
}

export default App;
