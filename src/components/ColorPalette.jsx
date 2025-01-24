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
      <div style={formBoxStyle}>
        <h1 style={styles.heading}>Color Wheel</h1>
        <ChromePicker
          color={color || "#fff"} 
          onChange={handleColorChange} 
        />
        <button onClick={handleSaveColor} style={styles.button}>Save Color</button>
      </div>
    </div>
    </div>
  );
};


const pageStyle = {
  backgroundImage:
    'url("https://static.vecteezy.com/system/resources/previews/000/962/809/original/abstract-gradient-background-with-colorful-and-modern-style-vector.jpg")', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const formBoxStyle = {
  backgroundColor: 'rgba(13, 12, 12, 0.9)', 
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  margin: '50px auto', 
};

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    height: "100vh",  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    margin: "0 0 20px",  
    color: "#fff", 
  },
  button: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ColorWheel;
