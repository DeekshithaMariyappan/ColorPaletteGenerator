import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/colorPalette');
  };
  const handleCreateAccount = () => {
    navigate('/signup');
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
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/000/962/809/original/abstract-gradient-background-with-colorful-and-modern-style-vector.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={pageStyle}>
    <div style={{ textAlign: 'center', marginTop: '50px',color:'white' }}>
      <h1>Welcome to Color Palette Generator</h1>
      <div style={formBoxStyle}>
        <form style={{ margin: '20px auto', maxWidth: '300px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{color:'yellow'}}>Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{color:'yellow'}}>Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={handleCreateAccount}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
