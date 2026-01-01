"use client";

interface StatusBarProps {
  canvasWidth: number;
  canvasHeight: number;
  cursorPosition?: { x: number; y: number };
  zoom: number;
}

export function StatusBar({ canvasWidth, canvasHeight, cursorPosition, zoom }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-[#f0f0f0] border-t border-[#d0d0d0] text-xs text-gray-600">
      <div className="flex items-center gap-4">
        {cursorPosition && (
          <span>{cursorPosition.x}, {cursorPosition.y}px</span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span>{canvasWidth} × {canvasHeight}px</span>
        <span>{zoom}%</span>
      </div>
    </div>
  );
}

