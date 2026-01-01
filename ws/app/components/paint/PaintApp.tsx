"use client";

import { useState, useCallback } from "react";
import { MenuBar } from "./MenuBar";
import { Toolbar } from "./Toolbar";
import { ColorPalette } from "./ColorPalette";
import { Canvas } from "./Canvas";
import { StatusBar } from "./StatusBar";
import { Tool } from "./types";

export function PaintApp() {
  const [activeTool, setActiveTool] = useState<Tool>("pencil");
  const [brushSize, setBrushSize] = useState(5);
  
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");
  
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | undefined>();

  const handleCanvasSizeChange = useCallback((width: number, height: number) => {
    setCanvasSize({ width, height });
  }, []);
  
  const handleNewCanvas = () => {
    if (confirm("Reset the canvas? Unsaved changes will be lost.")) {
      window.location.reload();
    }
  };

  const handleSave = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = "paint-image.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const handleColorPick = (color: string) => {
    setPrimaryColor(color);
    setActiveTool("pencil"); 
  };

  return (
    <div className="flex flex-col h-screen bg-[#f0f0f0] font-['Segoe_UI',sans-serif]">
      {/* Menu Bar */}
      <MenuBar onNew={handleNewCanvas} onSave={handleSave} />
      
      {/* Toolbar */}
      <Toolbar
        activeTool={activeTool}
        onToolChange={setActiveTool}
        brushSize={brushSize}
        onBrushSizeChange={setBrushSize}
      />
      
      {/* Color Palette */}
      <ColorPalette
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        onPrimaryColorChange={setPrimaryColor}
        onSecondaryColorChange={setSecondaryColor}
      />
      
      {/* Canvas Area */}
      <Canvas
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        activeTool={activeTool}
        brushSize={brushSize}
        onColorPick={handleColorPick}
        onSizeChange={handleCanvasSizeChange}
        overlayText="hello!" 
        overlayText2="welcome to my personal website. feel free to make a doodle or two while you're here :)"
      />
      
      {/* Status Bar */}
      <StatusBar
        canvasWidth={canvasSize.width}
        canvasHeight={canvasSize.height}
        cursorPosition={cursorPosition}
        zoom={100}
      />
    </div>
  );
}

