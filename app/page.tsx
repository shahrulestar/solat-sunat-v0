"use client"

import { useState } from "react"
import { Moon } from "lucide-react"
import LanguageToggle from "@/components/language-toggle"
import PrayerSelector from "@/components/prayer-selector"
import PrayerDetails from "@/components/prayer-details"
import { prayers } from "@/lib/prayers"
import { translations } from "@/lib/i18n"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ms">("en")
  const [selectedPrayer, setSelectedPrayer] = useState(prayers[0])
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Moon className="h-6 w-6" />
          </div>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <main className="flex-grow">
        {/* Intro Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-sans text-3xl md:text-4xl font-semibold mb-6 text-center">{t.whatIsSolatSunat}</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">{t.solatSunatDescription}</p>

            <blockquote className="border-l-4 border-gray-800 pl-4 py-3 my-8 bg-white rounded-r-md">
              <div className="mb-4 text-right font-arabic leading-relaxed">{t.quranVerse.arabic}</div>
              <div className="text-gray-600 italic mb-2">{t.quranVerse.latin}</div>
              <div className="text-gray-800 font-medium">{t.quranVerse.translation}</div>
              <div className="text-gray-500 text-sm mt-2">{t.quranVerse.reference}</div>
            </blockquote>
          </div>
        </section>

        {/* Prayer Selector Section */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl md:text-3xl font-semibold mb-8 text-center">{t.choosePrayer}</h2>

            <PrayerSelector
              prayers={prayers}
              selectedPrayer={selectedPrayer}
              setSelectedPrayer={setSelectedPrayer}
              language={language}
            />

            <div className="mt-12">
              <PrayerDetails prayer={selectedPrayer} language={language} />
            </div>
          </div>
        </section>

        {/* Encouragement Section */}
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl md:text-3xl font-semibold mb-6">{t.encouragementTitle}</h2>
            <p className="text-xl italic mb-8 max-w-2xl mx-auto">{t.encouragementQuote}</p>

            <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-right font-arabic mb-3">{t.hadith.arabic}</p>
              <p className="text-gray-600 italic mb-2">{t.hadith.latin}</p>
              <p className="text-gray-800">{t.hadith.translation}</p>
              <p className="text-gray-500 text-sm mt-2">{t.hadith.reference}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Moon className="h-6 w-6" />
          </div>
          <div className="text-gray-600 text-sm">
            {t.footerNote}{" "}
            <a href="https://shahrulestar.com" className="underline hover:text-black transition-colors">
              shahrulestar.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
