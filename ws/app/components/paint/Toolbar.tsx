"use client";

import { Tool } from "./types";

interface ToolbarProps {
  activeTool: Tool;
  onToolChange: (tool: Tool) => void;
  brushSize: number;
  onBrushSizeChange: (size: number) => void;
}

export function Toolbar({ activeTool, onToolChange, brushSize, onBrushSizeChange }: ToolbarProps) {
  const tools: { id: Tool; label: string; icon: string }[] = [
    { id: "pencil", label: "Pencil", icon: "✏️" },
    { id: "brush", label: "Brush", icon: "🖌️" },
    { id: "eraser", label: "Eraser", icon: "🧹" },
    { id: "fill", label: "Fill", icon: "🪣" },
    { id: "text", label: "Text", icon: "A" },
    { id: "picker", label: "Color Picker", icon: "💧" },
    { id: "line", label: "Line", icon: "╱" },
    { id: "rectangle", label: "Rectangle", icon: "▢" },
    { id: "ellipse", label: "Ellipse", icon: "◯" },
  ];

  return (
    <div className="flex items-center gap-1 p-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
      {/* Tools Section */}
      <div className="flex items-center gap-1 px-2 border-r border-[#c0c0c0]">
        <span className="text-xs text-gray-600 mr-2">Tools</span>
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => onToolChange(tool.id)}
            className={`w-8 h-8 flex items-center justify-center rounded text-sm
              ${activeTool === tool.id 
                ? "bg-[#cce4f7] border border-[#7eb4ea]" 
                : "hover:bg-[#e5e5e5] border border-transparent"
              }`}
            title={tool.label}
          >
            {tool.icon}
          </button>
        ))}
      </div>

      {/* Brush Size Section */}
      <div className="flex items-center gap-2 px-3">
        <span className="text-xs text-gray-600">Size</span>
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => onBrushSizeChange(Number(e.target.value))}
          className="w-24 h-1 accent-[#0078d4]"
        />
        <span className="text-xs text-gray-600 w-6">{brushSize}px</span>
      </div>
    </div>
  );
}

