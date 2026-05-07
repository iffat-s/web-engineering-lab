import React from 'react';
import { useTheme } from '../context/useTheme';
const GrandchildContext = () => {
  const { theme, setTheme } = useTheme();
  const styles = {
    backgroundColor: theme === 'dark' ? '#222' : '#f5f5f5',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    marginTop: '10px',
    borderRadius: '8px',
    transition: '0.3s ease'
  };
  return (
    <div style={styles}>
      <h3>Context API Theme Toggling</h3>
      <p>Current Theme: {theme}</p>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={{
          padding: '10px',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default GrandchildContext;

//not in exam related themes 