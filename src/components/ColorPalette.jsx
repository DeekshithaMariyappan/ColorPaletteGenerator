import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useNavigate } from "react-router-dom";

const ColorWheel = () => {
  const [color, setColor] = useState(null);
  const navigate = useNavigate();

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleSaveColor = () => {
    if (!color) {
      alert("Please select a color before saving!");
      return;
    }
    const savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    savedColors.push(color);
    localStorage.setItem("savedColors", JSON.stringify(savedColors));
    navigate("/savedPalette");
  };

  return (
    <div style={pageStyle}>
      <div style={styles.container}>
        <h1 style={styles.mainHeading}>Welcome to Color Palette Generator</h1>
        <div style={formBoxStyle}>
          <h1 style={styles.heading}>Color Wheel</h1>
          <ChromePicker color={color || "#fff"} onChange={handleColorChange} />
          <button onClick={handleSaveColor} style={styles.button}>
            Save Color
          </button>
        </div>
      </div>
    </div>
  );
};

const pageStyle = {
  backgroundImage:
    'url("https://static.vecteezy.com/system/resources/previews/000/962/809/original/abstract-gradient-background-with-colorful-and-modern-style-vector.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const formBoxStyle = {
  backgroundColor: "rgba(13, 12, 12, 0.9)",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeading: {
    marginBottom: "20px",
    color: "#fff",
    fontSize: "2rem",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
  },
  heading: {
    marginBottom: "20px",
    color: "#fff",
    fontSize: "1.5rem",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default ColorWheel;
