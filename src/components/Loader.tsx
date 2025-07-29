import React from "react";
import logo from "@/assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-brand-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-brand-blue-300 rounded-full animate-ping"></div>
          <div className="absolute inset-2 border-4 border-brand-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 bg-brand-blue-600 rounded-full"></div>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="Renan Bruno - Logo" className="h-10 w-auto" />
        </div>
        <div className="text-brand-blue-300 text-sm mt-2">Carregando...</div>
      </div>
    </div>
  );
};

export default Loader;
