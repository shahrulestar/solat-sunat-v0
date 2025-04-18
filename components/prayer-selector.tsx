"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Prayer } from "@/lib/prayers"

interface PrayerSelectorProps {
  prayers: Prayer[]
  selectedPrayer: Prayer
  setSelectedPrayer: (prayer: Prayer) => void
  language: "en" | "ms"
}

export default function PrayerSelector({ prayers, selectedPrayer, setSelectedPrayer, language }: PrayerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium">{language === "en" ? selectedPrayer.title_en : selectedPrayer.title_ms}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {prayers.map((prayer) => (
            <button
              key={prayer.id}
              onClick={() => {
                setSelectedPrayer(prayer)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                selectedPrayer.id === prayer.id ? "bg-gray-100" : ""
              }`}
            >
              {language === "en" ? prayer.title_en : prayer.title_ms}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
