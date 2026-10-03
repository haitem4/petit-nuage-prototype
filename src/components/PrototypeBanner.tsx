"use client";

import React, { useState } from "react";
import { Sparkles, Eye, X } from "lucide-react";

export function PrototypeBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="bg-gradient-to-r from-baby-sky via-baby-pink to-baby-mint text-baby-slate py-2 px-4 shadow-sm text-xs md:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full font-bold text-baby-slate text-[11px] uppercase tracking-wider">
            Prototype Client
          </span>
          <span className="hidden sm:inline">
            Aperçu interactif pour validation du design, des couleurs douces et de l'ergonomie.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] bg-white/60 px-2 py-0.5 rounded font-mono">
            Version 1.0 (Maquette active)
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-baby-slate/70 hover:text-baby-slate p-0.5 rounded-full hover:bg-white/40 transition"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

