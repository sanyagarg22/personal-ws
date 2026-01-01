"use client";

interface ColorPaletteProps {
  primaryColor: string;
  secondaryColor: string;
  onPrimaryColorChange: (color: string) => void;
  onSecondaryColorChange: (color: string) => void;
}

const PRESET_COLORS = [
  // Row 1 - Basic colors
  "#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4",
  // Row 2 - Light colors
  "#ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7",
];

export function ColorPalette({ 
  primaryColor, 
  secondaryColor, 
  onPrimaryColorChange, 
  onSecondaryColorChange 
}: ColorPaletteProps) {
  return (
    <div className="flex items-center gap-3 p-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
      {/* Color 1 & 2 Preview */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] text-gray-600">Colors</span>
        <div className="relative w-10 h-10">
          {/* Secondary color (background) */}
          <div
            className="absolute bottom-0 right-0 w-6 h-6 border border-gray-400 cursor-pointer"
            style={{ backgroundColor: secondaryColor }}
            onClick={() => {
              const input = document.createElement("input");
              input.type = "color";
              input.value = secondaryColor;
              input.onchange = (e) => onSecondaryColorChange((e.target as HTMLInputElement).value);
              input.click();
            }}
            title="Color 2 (Right-click)"
          />
          {/* Primary color (foreground) */}
          <div
            className="absolute top-0 left-0 w-6 h-6 border-2 border-gray-500 cursor-pointer z-10"
            style={{ backgroundColor: primaryColor }}
            onClick={() => {
              const input = document.createElement("input");
              input.type = "color";
              input.value = primaryColor;
              input.onchange = (e) => onPrimaryColorChange((e.target as HTMLInputElement).value);
              input.click();
            }}
            title="Color 1 (Left-click)"
          />
        </div>
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-10 gap-[2px]">
        {PRESET_COLORS.map((color, index) => (
          <button
            key={index}
            className={`w-4 h-4 border hover:scale-110 transition-transform
              ${primaryColor === color ? "border-2 border-blue-500" : "border-gray-400"}`}
            style={{ backgroundColor: color }}
            onClick={() => onPrimaryColorChange(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              onSecondaryColorChange(color);
            }}
            title={color}
          />
        ))}
      </div>

      {/* Edit Colors Button */}
      <button className="text-xs px-2 py-1 border border-gray-400 rounded hover:bg-gray-200">
        Edit colors
      </button>
    </div>
  );
}

