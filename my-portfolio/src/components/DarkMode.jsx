import '../DarkTheme.css';
import { useState, useEffect } from 'react';

function DarkTheme() {
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    setLight(prevState => !prevState);
  };

  useEffect(() => {
    if (light) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [light]); 

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <span className="sr-only"> Toggle light and dark mode </span>
        <input
          type="checkbox"
          id="checkbox"
          checked={light}
          onChange={toggleTheme}
          aria-label="Toggle light and dark mode"
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
}

export default DarkTheme;
