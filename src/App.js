import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';

function App() { 
  // convert rgba to hex color code
  const RGBAToHexA = ({r,g,b,a}) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
    if (a.length === 1)
      a = "0" + a;
  
    return "#" + r + g + b + a;
  }
  // default highlighted color
  const defaultColor = {
      hex: '#333',
      rgb: {
        r: 51,
        g: 51,
        b: 51,
        a: 0.3,
      },
      hsl: {
        h: 0,
        s: 0,
        l: .20,
        a: 0.3,
      },
    }
  const [bgColor, setBgColor] = useState(defaultColor.rgb);
  const [bgColorHex, setBgColorHex] = useState(defaultColor.hex);

  // swatch picker on change event 
  const handleChangeComplete = (color) => {
    setBgColor(color.rgb);
  }

  // on bgColor change event
  useEffect(() => {
    const hexColor = RGBAToHexA(bgColor);
    setBgColorHex(hexColor);
  }, [bgColor])

  return (
    <div className="App" style={{ backgroundColor: bgColorHex }}>
      <SketchPicker
        color={ bgColor }
        onChangeComplete={ handleChangeComplete }
      />
    </div>
  );
}

export default App;
