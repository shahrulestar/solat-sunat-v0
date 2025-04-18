export interface Prayer {
  id: string
  label: string
  title_en: string
  title_ms: string
  description_en: string
  description_ms: string
  when_en: string
  when_ms: string
  rakaat: number
  niyyah: {
    arabic: string
    latin: string
    en: string
    ms: string
  }
  recommended_surahs: {
    en: string[]
    ms: string[]
  }
}

export const prayers: Prayer[] = [
  {
    id: "dhuha",
    label: "Solat Dhuha",
    title_en: "Dhuha Prayer",
    title_ms: "Solat Dhuha",
    description_en: "A morning prayer after sunrise, known for attracting sustenance.",
    description_ms: "Solat pagi selepas matahari terbit, membuka pintu rezeki.",
    when_en: "After 20 minutes from sunrise until before Zuhur.",
    when_ms: "20 minit selepas terbit matahari hingga sebelum Zuhur.",
    rakaat: 2,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatal Dhuha rak'ataini lillahi ta'ala",
      en: "I intend to perform two rakaat of the Dhuha prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Dhuha dua rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: ["Surah Ash-Shams (The Sun)", "Surah Ad-Duha (The Morning Hours)", "Surah Al-Kafirun (The Disbelievers)"],
      ms: ["Surah Ash-Shams (Matahari)", "Surah Ad-Duha (Waktu Dhuha)", "Surah Al-Kafirun (Orang-orang Kafir)"],
    },
  },
  {
    id: "tahajjud",
    label: "Solat Tahajjud",
    title_en: "Tahajjud Prayer",
    title_ms: "Solat Tahajjud",
    description_en: "Night prayer performed after waking from sleep. Highly encouraged.",
    description_ms: "Solat malam selepas tidur. Antara solat sunat yang paling utama.",
    when_en: "Anytime after Isyak and after waking from sleep, before Subuh.",
    when_ms: "Selepas solat Isyak dan bangun dari tidur, sebelum Subuh.",
    rakaat: 2,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatat Tahajjud rak'ataini lillahi ta'ala",
      en: "I intend to perform two rakaat of the Tahajjud prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Tahajjud dua rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: [
        "Surah As-Sajdah (The Prostration)",
        "Surah Al-Mulk (The Sovereignty)",
        "Surah Al-Muzammil (The Enshrouded One)",
      ],
      ms: ["Surah As-Sajdah (Sujud)", "Surah Al-Mulk (Kerajaan)", "Surah Al-Muzammil (Orang Yang Berselimut)"],
    },
  },
  {
    id: "witir",
    label: "Solat Witir",
    title_en: "Witir Prayer",
    title_ms: "Solat Witir",
    description_en: "An odd-numbered prayer, usually performed after Isyak or after other night prayers.",
    description_ms: "Solat dengan bilangan rakaat ganjil, dilakukan selepas Isyak atau selepas qiyam.",
    when_en: "After Isyak until before Subuh.",
    when_ms: "Selepas Isyak hingga sebelum Subuh.",
    rakaat: 1,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ الْوِتْرِ رَكْعَةً لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatal Witri rak'atan lillahi ta'ala",
      en: "I intend to perform one rakaat of the Witir prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Witir satu rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: ["Surah Al-A'la (The Most High)", "Surah Al-Kafirun (The Disbelievers)", "Surah Al-Ikhlas (The Sincerity)"],
      ms: ["Surah Al-A'la (Yang Maha Tinggi)", "Surah Al-Kafirun (Orang-orang Kafir)", "Surah Al-Ikhlas (Ikhlas)"],
    },
  },
  {
    id: "hajat",
    label: "Solat Hajat",
    title_en: "Hajat Prayer",
    title_ms: "Solat Hajat",
    description_en: "Prayer to seek help or guidance from Allah in times of need.",
    description_ms: "Solat memohon pertolongan daripada Allah dalam apa jua hajat.",
    when_en: "Any time except during prohibited times.",
    when_ms: "Bila-bila masa kecuali waktu yang dilarang.",
    rakaat: 2,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatal Hajati rak'ataini lillahi ta'ala",
      en: "I intend to perform two rakaat of the Hajat prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Hajat dua rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: ["Surah Al-Fatihah (The Opening)", "Surah Al-Ikhlas (The Sincerity)", "Surah Al-Falaq (The Daybreak)"],
      ms: ["Surah Al-Fatihah (Pembukaan)", "Surah Al-Ikhlas (Ikhlas)", "Surah Al-Falaq (Waktu Subuh)"],
    },
  },
  {
    id: "istikharah",
    label: "Solat Istikharah",
    title_en: "Istikharah Prayer",
    title_ms: "Solat Istikharah",
    description_en: "Prayer for seeking guidance in making a decision.",
    description_ms: "Solat untuk memohon petunjuk daripada Allah dalam membuat pilihan.",
    when_en: "Anytime when one needs to make a decision (avoid prohibited times).",
    when_ms: "Dilakukan bila perlu membuat keputusan penting.",
    rakaat: 2,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatal Istikharah rak'ataini lillahi ta'ala",
      en: "I intend to perform two rakaat of the Istikharah prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Istikharah dua rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: [
        "Surah Al-Kafirun (The Disbelievers)",
        "Surah Al-Ikhlas (The Sincerity)",
        "Surah An-Nasr (The Divine Support)",
      ],
      ms: ["Surah Al-Kafirun (Orang-orang Kafir)", "Surah Al-Ikhlas (Ikhlas)", "Surah An-Nasr (Pertolongan)"],
    },
  },
  {
    id: "tawbah",
    label: "Solat Taubat",
    title_en: "Tawbah Prayer",
    title_ms: "Solat Taubat",
    description_en: "Prayer for seeking forgiveness from sins with sincere repentance.",
    description_ms: "Solat sunat memohon keampunan daripada Allah atas dosa-dosa.",
    when_en: "Anytime, especially after committing a sin.",
    when_ms: "Bila-bila masa, terutama selepas dosa dilakukan.",
    rakaat: 2,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatal Tawbah rak'ataini lillahi ta'ala",
      en: "I intend to perform two rakaat of the Tawbah prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Taubat dua rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: ["Surah At-Tawbah (The Repentance)", "Surah Al-Furqan (The Criterion)", "Surah Az-Zumar (The Groups)"],
      ms: ["Surah At-Tawbah (Taubat)", "Surah Al-Furqan (Pembeza)", "Surah Az-Zumar (Rombongan-rombongan)"],
    },
  },
  {
    id: "rawatib",
    label: "Solat Rawatib",
    title_en: "Rawatib Prayer",
    title_ms: "Solat Rawatib",
    description_en: "Voluntary prayers performed before or after the five obligatory prayers.",
    description_ms: "Solat sunat yang dilakukan sebelum atau selepas solat fardhu.",
    when_en: "Before/after Fardhu prayers (Subuh, Zuhur, Maghrib, Isyak).",
    when_ms: "Sebelum/selepas solat fardhu (Subuh, Zuhur, Maghrib, Isyak).",
    rakaat: 2,
    niyyah: {
      arabic: "أُصَلِّي سُنَّةَ الرَّوَاتِبِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Usolli sunnatal Rawatibi rak'ataini lillahi ta'ala",
      en: "I intend to perform two rakaat of the Rawatib prayer for the sake of Allah.",
      ms: "Sahaja aku solat sunat Rawatib dua rakaat kerana Allah Ta'ala",
    },
    recommended_surahs: {
      en: ["Surah Al-Kafirun (The Disbelievers)", "Surah Al-Ikhlas (The Sincerity)", "Surah Al-Asr (The Time)"],
      ms: ["Surah Al-Kafirun (Orang-orang Kafir)", "Surah Al-Ikhlas (Ikhlas)", "Surah Al-Asr (Masa)"],
    },
  },
]
