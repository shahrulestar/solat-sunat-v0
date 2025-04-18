"use client"

import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: "en" | "ms"
  setLanguage: (lang: "en" | "ms") => void
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex border border-gray-300 rounded-md overflow-hidden">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm ${
            language === "en" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          🇬🇧 EN
        </button>
        <button
          onClick={() => setLanguage("ms")}
          className={`px-3 py-1 text-sm ${
            language === "ms" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          🇲🇾 MS
        </button>
      </div>
    </div>
  )
}
