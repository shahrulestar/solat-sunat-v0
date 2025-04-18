import { Clock, BookOpen, BookIcon } from "lucide-react"
import type { Prayer } from "@/lib/prayers"

interface PrayerDetailsProps {
  prayer: Prayer
  language: "en" | "ms"
}

export default function PrayerDetails({ prayer, language }: PrayerDetailsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-fadeIn">
      <h3 className="font-sans text-2xl font-semibold mb-4">{language === "en" ? prayer.title_en : prayer.title_ms}</h3>

      <p className="text-gray-700 mb-6">{language === "en" ? prayer.description_en : prayer.description_ms}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-gray-500 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">
              {language === "en" ? "When to Perform" : "Waktu Pelaksanaan"}
            </h4>
            <p className="text-gray-600">{language === "en" ? prayer.when_en : prayer.when_ms}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <BookOpen className="h-5 w-5 text-gray-500 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900 mb-1">
              {language === "en" ? "Number of Rakaat" : "Bilangan Rakaat"}
            </h4>
            <p className="text-gray-600">
              {prayer.rakaat} {language === "en" ? "rakaat" : "rakaat"}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-3">{language === "en" ? "Niyyah (Intention)" : "Niat"}</h4>

        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-right font-arabic mb-3 leading-relaxed">{prayer.niyyah.arabic}</p>
          <p className="text-gray-600 italic mb-2">{prayer.niyyah.latin}</p>
          <p className="text-gray-800">{language === "en" ? prayer.niyyah.en : prayer.niyyah.ms}</p>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-3">
          {language === "en" ? "Recommended Surahs" : "Surah yang Disarankan"}
        </h4>
        <div className="flex items-start space-x-3">
          <BookIcon className="h-5 w-5 text-gray-500 mt-1" />
          <div>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {prayer.recommended_surahs[language === "en" ? "en" : "ms"].map((surah, index) => (
                <li key={index}>{surah}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">{language === "en" ? "How to Perform" : "Cara Pelaksanaan"}</h4>

        <ol className="list-decimal pl-5 space-y-3 text-gray-700">
          <li>
            {language === "en"
              ? "Perform ablution (wudhu) if you do not have it already."
              : "Lakukan wudhu jika belum berwudhu."}
          </li>
          <li>
            {language === "en"
              ? "Face the Qiblah and make the intention (niyyah) in your heart."
              : "Menghadap kiblat dan berniat di dalam hati."}
          </li>
          <li>
            {language === "en"
              ? 'Raise your hands to your ears and say "Allahu Akbar".'
              : 'Angkat tangan ke telinga dan ucap "Allahu Akbar".'}
          </li>
          <li>
            {language === "en"
              ? "Recite Surah Al-Fatihah followed by any other surah."
              : "Baca Surah Al-Fatihah diikuti dengan surah lain."}
          </li>
          <li>
            {language === "en"
              ? "Complete the prayer as you would for any other prayer."
              : "Selesaikan solat seperti solat-solat yang lain."}
          </li>
          <li>
            {language === "en"
              ? "Make dua (supplication) after completing the prayer."
              : "Berdoa selepas selesai solat."}
          </li>
        </ol>
      </div>
    </div>
  )
}
