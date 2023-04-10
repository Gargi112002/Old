import React,{useState} from "react";
import Button from "./Button";
import "./Toolbar.css"
import {
  FaPencilAlt,FaTools,FaEraser,FaBrush,FaFillDrip,FaMagic
} from "react-icons/fa";

const Toolbox = () => {
  // const buttons = [
  //   { label: "Pencil " },<FaPencilAlt/>,
  //   { label: "Eraser" },<FaEraser/>,
  //   { label: "Tool" },<FaTools/>,
  //   { label: "Brush" },<FaBrush/>,
  //   { label: "Color" },<FaMagic/>,
  //   { label: "Fill" },<FaFillDrip/>
  // ];
  const [showPalette, setShowPalette] = useState(false);

  const handleButtonClick = () => {
    setShowPalette(!showPalette);
  }
  
  const buttons = [
    { label: "Pencil " },
    { label: "Eraser" },
    { label: "Tool" },
    { label: "Brush" },
    { label: "Color" },
    { label: "Fill" },
  ];
    const [selectedTool, setSelectedTool] = useState(null);
  
   
  return (
    <div>
      <p>Select Option -</p>
    <div className="toolbox">
    
      {buttons.map((button, index) => (

        <Button key={index} label={button.label} />
      
      
      ))}
      {/* <h3>Selected Option: </h3>
       <input type="text" className="box" /> */}
      <button className="helo" onClick={handleButtonClick}>Color</button>
      {showPalette ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: '#FF0000', width: '50px', height: '50px' }}></div>
          <div style={{ backgroundColor: '#00FF00', width: '50px', height: '50px' }}></div>
          <div style={{ backgroundColor: '#0000FF', width: '50px', height: '50px' }}></div>
          <div style={{ backgroundColor: '#FFFF00', width: '50px', height: '50px' }}></div>
          <div style={{ backgroundColor: '#FF00FF', width: '50px', height: '50px' }}></div>
          <div style={{ backgroundColor: '#00FFFF', width: '50px', height: '50px' }}></div>
        </div>
      ) : null}
            {/* <div className="tool">
        <button onClick={() => handleToolClick('line')}>Line</button>
        <button onClick={() => handleToolClick('rectangle')}>Rectangle</button>
        <button onClick={() => handleToolClick('circle')}>Circle</button>
      </div>
      <div className="canvas">
        {selectedTool === 'line' && (
          <svg>
            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
          </svg>
        )}
        {selectedTool === 'rectangle' && (
          <svg>
            <rect x="0" y="0" width="100" height="100" fill="white" stroke="black" strokeWidth="2" />
          </svg>
        )}
        {selectedTool === 'circle' && (
          <svg>
            <circle cx="50" cy="50" r="50" fill="white" stroke="black" strokeWidth="2" />
          </svg>
        )}
      </div>
      */}
    </div>
    
    </div>
  );
};

export default Toolbox;
