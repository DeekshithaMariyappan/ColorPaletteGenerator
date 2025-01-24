import React, { useEffect, useState } from "react";

const ApplyPalette = () => {
  const [color, setColor] = useState(""); 
  const [text, setText] = useState(""); 

  useEffect(() => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText()
        .then((clipboardText) => {
          setColor(clipboardText); 
        })
        .catch((err) => {
          console.error("Failed to read clipboard: ", err);
        });
    } else {
      console.warn("Clipboard API not supported in this browser.");
    }
  }, []);

  return (
    <div style={pageStyle}>
      <div style={styles.container}>
        <div style={styles.formBox}>
          <h1 style={styles.heading}>Text Box with Color</h1>
          <textarea
            style={{
              ...styles.textBox,
              backgroundColor: color || "#fff", 
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something here..."
          />
        </div>
      </div>
    </div>
  );
};

const pageStyle = {
  backgroundImage:
    'url("https://static.vecteezy.com/system/resources/previews/000/962/809/original/abstract-gradient-background-with-colorful-and-modern-style-vector.jpg")', // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  formBox: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", 
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)", 
  },
  heading: {
    marginBottom: "20px",
    color: "#fff",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  textBox: {
    width: "100%",
    height: "150px",
    padding: "10px",
    color: "#000",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
    resize: "none",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)", 
  },
};

export default ApplyPalette;
