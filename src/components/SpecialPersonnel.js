import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  Paper,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const WeaponList = () => {
  const [weapons, setWeapons] = useState([
    { name: "Harita Eğt.", quantity: "", points: "", weight: "" },
    { name: "Kes. Niş. Eğt.", quantity: "", points: "", weight: "" },
    { name: "Dağcılık Eğt.", quantity: "", points: "", weight: "" },
    { name: "İlk Yardım Eğt.", quantity: "", points: "", weight: "" },
    { name: "Zırhlı Araç Eğt.", quantity: "", points: "", weight: "" },
    { name: "Zırhlı Kule Eğt.", quantity: "", points: "", weight: "" },
    { name: "Drone Eğt.", quantity: "", points: "", weight: "" },
    { name: "Bombacılık Eğt", quantity: "", points: "", weight: "" },
    { name: "Köpek Eğt", quantity: "", points: "", weight: "" },
    // Diğer silahları ekleyebilirsiniz
  ]);

  const [totalPower, setTotalPower] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const calculateTotalPower = () => {
    let calculatedTotalPower = 0;
    let calculatedTotalWeight = 0;

    weapons.forEach((weapon) => {
      const quantity = parseFloat(weapon.quantity) || 0;
      const points = parseFloat(weapon.points) || 0;
      const weight = parseFloat(weapon.weight) || 0;

      calculatedTotalPower += quantity * points;
      calculatedTotalWeight += quantity * weight;
    });

    setTotalWeight(calculatedTotalWeight);

    return calculatedTotalPower;
  };

  const handleQuantityChange = (index, value) => {
    const newWeapons = [...weapons];
    newWeapons[index].quantity = value;
    setWeapons(newWeapons);
  };

  const handlePointsChange = (index, value) => {
    const newWeapons = [...weapons];
    newWeapons[index].points = value;
    setWeapons(newWeapons);
  };

  const handleWeightChange = (index, value) => {
    const newWeapons = [...weapons];
    newWeapons[index].weight = value;
    setWeapons(newWeapons);
  };

  const handleCalculateClick = () => {
    const calculatedTotalPower = calculateTotalPower();
    setTotalPower(calculatedTotalPower);
  };

  return (
    <Card
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginTop: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        Eğitimli Personel
      </Typography>
      <CardContent>
        <List
          sx={{
            height: "400px",
            overflow: "auto",
          }}
        >
          {weapons.map((weapon, index) => (
            <ListItem
              key={index}
              style={{
                backgroundColor: "#f5f5f5",
                marginBottom: "8px",
                borderRadius: "4px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>{weapon.name}</div>
              <TextField
                label="Adet"
                type="number"
                step="1"
                value={weapon.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                style={{ marginLeft: "8px" }}
              />
              <TextField
                label="Puan"
                type="number"
                step="0.1"
                value={weapon.points}
                onChange={(e) => handlePointsChange(index, e.target.value)}
                style={{ marginLeft: "8px" }}
              />
              <TextField
                label="Kilogram"
                type="number"
                step="0.1"
                value={weapon.weight}
                onChange={(e) => handleWeightChange(index, e.target.value)}
                style={{ marginLeft: "8px" }}
              />
            </ListItem>
          ))}
        </List>

        <Button
          variant="contained"
          color="primary"
          onClick={handleCalculateClick}
          style={{ marginTop: "16px" }}
        >
          Hesapla
        </Button>
        <Paper elevation={3} style={{ padding: "10px", marginTop: "20px" }}>
          <strong>Toplam Güç Çarpanı:</strong> {totalPower}
          <br />
          <strong>Toplam Kilogram:</strong> {totalWeight} kg
        </Paper>
      </CardContent>
    </Card>
  );
};

export default WeaponList;
