"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "ml"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.partners": "Partners",
    "nav.cta": "Join the Movement",

    // Hero
    "hero.headline": "Kerala Pioneered Digital Literacy. Now, Let's Define Responsible AI.",
    "hero.subtext": "A statewide initiative to make AI accessible, meaningful, and engaging for every citizen.",
    "hero.student": "I am a Student",
    "hero.partner": "Partner with Us",

    // Smart Selector
    "selector.kutty": "KuttyMakers",
    "selector.young": "Young Makers",
    "selector.friends": "Friends of Movement",
    "selector.kutty.desc": "Curiosity & Games",
    "selector.young.desc": "Hackathons & Careers",
    "selector.friends.desc": "Safety & Deepfakes",
    "selector.kutty.detail":
      "Introduce young minds to AI through interactive games, puzzles, and creative challenges designed for curious learners.",
    "selector.young.detail":
      "Build your AI skills through hackathons, mentorship programs, and career pathways in the emerging AI industry.",
    "selector.friends.detail":
      "Understand responsible AI, digital safety, and how to identify deepfakes and misinformation.",

    // Philosophy
    "philosophy.head": "Understand",
    "philosophy.head.desc": "How AI works & why it matters.",
    "philosophy.hand": "Build",
    "philosophy.hand.desc": "Create local solutions with AI tools.",
    "philosophy.heart": "Empower",
    "philosophy.heart.desc": "Mentor others & shape the future.",

    // Partners
    "partners.knowledge": "Knowledge Partners",
    "partners.financial": "Financial Partners",
    "partners.media": "Media Partners",
    "partners.community": "Community Partners",

    // Footer
    "footer.tagline": "Built with AI | Powered by v0",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
  },
  ml: {
    // Navbar
    "nav.about": "എങ്ങനെയാണ്",
    "nav.programs": "പ്രോഗ്രാമുകൾ",
    "nav.partners": "പങ്കാളികൾ",
    "nav.cta": "പ്രസ്ഥാനത്തിൽ ചേരുക",

    // Hero
    "hero.headline": "കേരളം ഡിജിറ്റൽ സാക്ഷരത അറിയിച്ചു. ഇനി നിരപ്പായ AI നിർവചിക്കാം.",
    "hero.subtext": "ഓരോ പൗരനും AI ആക്സസ് ചെയ്യാനും അർത്ഥപ്രദവും നിയോജകവുമായി ഉണ്ടാക്കാനുള്ള സംസ്ഥാന സമ്മതി.",
    "hero.student": "ഞാൻ ഒരു വിദ്യാർത്ഥിയാണ്",
    "hero.partner": "ഞങ്ങളുമായി പങ്കാളി ആകുക",

    // Smart Selector
    "selector.kutty": "കുട്ടിമേക്കർസ്",
    "selector.young": "യുവ നിർമ്മാതാക്കൾ",
    "selector.friends": "പ്രസ്ഥാനത്തിന്റെ സുഹൃത്തുക്കൾ",
    "selector.kutty.desc": "ജിജ്ഞാസയും കളികളും",
    "selector.young.desc": "ഹ്যാക്കാതോണുകളും ജോലികളും",
    "selector.friends.desc": "സുരക്ഷ ഡീപ്ഫെയ്കുകൾ",
    "selector.kutty.detail": "ഇന്ററാക്ടീവ് ഗെയിമുകൾ, പസ്സിലുകൾ, കൃജിജ്ഞാസ കലാകാര്യ സമര്പ്പണങ്ങളിലൂടെ യുവ മനസ്സുകളെ AI-ഗുണരൂപം ചെയ്യുക.",
    "selector.young.detail": "ഹ്യാക്കാതോണുകൾ, മെന്റോർഷിപ് പ്രോഗ്രാമുകൾ, കയ്യറീയർ പാതകൾ എന്നിവയിലൂടെ നിങ്ങളുടെ AI വൈദഗ്ധ്യം രൂപീകരിക്കുക.",
    "selector.friends.detail": "ഉത്തരവാദിത്വപൂർണ്ണ AI, ഡിജിറ്റൽ സുരക്ഷ, പ്രതിരൂപങ്ങളും തെറ്റായ വിവരങ്ങളും തിരിച്ചറിയുന്നത് മനസ്സിലാക്കുക.",

    // Philosophy
    "philosophy.head": "മനസ്സിലാക്കുക",
    "philosophy.head.desc": "AI എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്നും എന്തുകൊണ്ട് പ്രാധാന്യമുണ്ടെന്നും.",
    "philosophy.hand": "നിർമ്മിക്കുക",
    "philosophy.hand.desc": "AI ടൂളുകൾ ഉപയോഗിച്ച് പ്രാദേശിക പരിഹാരങ്ങൾ സൃഷ്ടിക്കുക.",
    "philosophy.heart": "ക്ഷമതാളിക്കുക",
    "philosophy.heart.desc": "മറ്റുള്ളവരെ പരിപാലിക്കുക കൂടാതെ ഭാവിഷ്യത്തെ രൂപീകരിക്കുക.",

    // Partners
    "partners.knowledge": "അറിവ് പങ്കാളികൾ",
    "partners.financial": "സാമ്പത്തിക പങ്കാളികൾ",
    "partners.media": "മാധ്യമ പങ്കാളികൾ",
    "partners.community": "കമ്യൂണിറ്റി പങ്കാളികൾ",

    // Footer
    "footer.tagline": "AI-യിൽ നിർമ്മിച്ചത് | v0 പ്രവർത്തിപ്പിക്കുന്നത്",
    "footer.company": "കമ്പനി",
    "footer.resources": "വിഭവങ്ങൾ",
    "footer.contact": "സംപർക്കം",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
