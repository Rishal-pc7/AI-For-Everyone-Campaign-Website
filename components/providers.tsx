"use client"

import { LanguageProvider } from "@/context/language-context"
import { SmoothScroll } from "@/components/smooth-scroll"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </LanguageProvider>
    )
}
