import React, { useState, useRef } from "react";
import {
  MapPin,
  Search,
  Home,
  Briefcase,
  Plus,
  Navigation,
  Check,
} from "lucide-react";

const Addres = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("Home");
  const [savedAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Maple Street, Springfield",
      icon: <Home size={16} />,
    },
    {
      id: 2,
      type: "Office",
      address: "888 Tech Plaza, Downtown",
      icon: <Briefcase size={16} />,
    },
  ]);

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const suggestions =
    searchQuery.length > 2
      ? [
          "123 Main St, Los Angeles, CA",
          "456 Market St, San Francisco, CA",
          "789 Broadway, New York, NY",
        ]
      : [];

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer hover:text-emerald-600 transition-colors py-2 px-3 bg-white rounded-lg shadow-sm border border-gray-100"
      >
        <MapPin size={16} className={isOpen ? "text-emerald-600" : ""} />
        <span className="font-medium">Select Address</span>
      </div>

      {isOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-emerald-50 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="p-4 border-b border-gray-50">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search or type address..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            {suggestions.length > 0 && (
              <div className="mt-2 space-y-1">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 hover:bg-emerald-50 rounded-md cursor-pointer text-xs text-gray-600 group"
                  >
                    <MapPin
                      size={12}
                      className="text-gray-400 group-hover:text-emerald-500"
                    />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 space-y-3">
            <button className="flex items-center gap-2 w-full text-emerald-600 text-sm font-semibold hover:bg-emerald-50 p-2 rounded-lg transition-colors">
              <Navigation size={14} />
              <span>Use current location</span>
            </button>

            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-2">
              Saved Addresses
            </div>

            <div className="space-y-2">
              {savedAddresses.map((addr) => (
                <div
                  key={addr.id}
                  onClick={() => setSelectedType(addr.type)}
                  className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-all border ${
                    selectedType === addr.type
                      ? "bg-emerald-50 border-emerald-100"
                      : "bg-white border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${selectedType === addr.type ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-500"}`}
                  >
                    {addr.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-800">
                        {addr.type}
                      </span>
                      {selectedType === addr.type && (
                        <Check size={12} className="text-emerald-600" />
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 truncate w-40">
                      {addr.address}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-gray-50 border border-dashed border-gray-200 text-gray-400">
                <div className="p-2 rounded-lg bg-gray-50">
                  <Plus size={16} />
                </div>
                <span className="text-xs font-medium">Add Other Address</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-emerald-50/30 flex gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md shadow-emerald-200 transition-all"
            >
              Save & Select
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addres;
