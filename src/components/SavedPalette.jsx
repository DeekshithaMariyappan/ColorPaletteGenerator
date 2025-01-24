import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const SavedPalette = () => {
  const [savedColors, setSavedColors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("savedColors")) || [];
    setSavedColors(colors); 
  }, []);

  const handleColorClick = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      navigate("/applyPalette");
    });
  };

  return (
    <div style={pageStyle}>
    <div style={styles.container}>
      <div style={formBoxStyle}>
        <h1 style={styles.heading}>Saved Palette</h1>
        {savedColors.length === 0 ? (
          <p>No colors saved yet.</p>
        ) : (
          <div>
            {savedColors.map((color, index) => (
              <div
                key={index}
                style={{
                  ...styles.colorDisplay,
                  backgroundColor: color,
                }}
                onClick={() => handleColorClick(color)} 
              >
                {color}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
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
  colorDisplay: {
    marginTop: "10px",
    padding: "20px",
    color: "#fff",
    textAlign: "center",
    width: "200px",
    borderRadius: "5px",
    cursor: "pointer", 
  },
};

export default SavedPalette;
