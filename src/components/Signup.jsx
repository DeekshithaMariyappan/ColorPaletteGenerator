import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate('/colorPalette');
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  const formBoxStyle = {
    backgroundColor: 'rgba(13, 12, 12, 0.9)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
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

  return (
    <div style={pageStyle}>
      <div>
        <h1 style={{ color: '#fff', marginBottom: '20px' }}>Create an Account</h1>
        <div style={formBoxStyle}>
          <form style={{ margin: '0 auto', maxWidth: '300px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username" style={{ color: 'yellow' }}>
                Username:
              </label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
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
              <label htmlFor="email" style={{ color: 'yellow' }}>
                Email:
              </label>
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
              <label htmlFor="password" style={{ color: 'yellow' }}>
                Password:
              </label>
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
              onClick={handleSignUp}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Sign Up
            </button>
          </form>
          <p style={{ marginTop: '20px', color: '#fff' }}>
            Already have an account?{' '}
            <span
              onClick={handleLoginRedirect}
              style={{
                color: '#007BFF',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
