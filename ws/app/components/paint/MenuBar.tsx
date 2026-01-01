"use client";

interface MenuBarProps {
  onNew: () => void;
  onSave: () => void;
}

export function MenuBar({ onNew, onSave }: MenuBarProps) {
  return (
    <div className="flex items-center bg-[#f0f0f0] border-b border-[#d0d0d0]">
      {/* File Menu Button */}
      <button className="px-4 py-2 text-sm font-medium text-white bg-[#0078d4] hover:bg-[#106ebe]">
        Sanya Garg
      </button>
      
      {/* Tabs */}
      <div className="flex">
        <button className="px-4 py-2 text-sm border-b-2 border-[#0078d4] bg-white">
          Home
        </button>
        <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-200">
          View
        </button>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center ml-auto gap-1 pr-2">
        <button 
          onClick={onNew}
          className="px-2 py-1 text-xs hover:bg-gray-200 rounded"
          title="New"
        >
          📄
        </button>
        <button 
          onClick={onSave}
          className="px-2 py-1 text-xs hover:bg-gray-200 rounded"
          title="Save"
        >
          💾
        </button>
      </div>
    </div>
  );
}

